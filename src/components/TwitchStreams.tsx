import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Stream {
  id: string;
  user_name: string;
  title: string;
  viewer_count: number;
  thumbnail_url: string;
  profile_image_url: string;
}

const TwitchStreams = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await fetch('https://gql.twitch.tv/gql', {
          method: 'POST',
          headers: {
            'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                game(name: "OpenFront") {
                  streams(first: 10) {
                    edges {
                      node {
                        id
                        title
                        viewersCount
                        previewImageURL(width: 440, height: 248)
                        broadcaster {
                          login
                          profileImageURL(width: 70)
                        }
                      }
                    }
                  }
                }
              }
            `
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch streams');
        }

        const data = await response.json();
        const streamsData = data.data.game?.streams.edges || [];
        
        setStreams(streamsData.map((edge: any) => ({
          id: edge.node.id,
          user_name: edge.node.broadcaster.login,
          title: edge.node.title,
          viewer_count: edge.node.viewersCount,
          thumbnail_url: edge.node.previewImageURL,
          profile_image_url: edge.node.broadcaster.profileImageURL
        })));
      } catch (error) {
        console.error('Error fetching Twitch streams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
    const interval = setInterval(fetchStreams, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (streams.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        Aucun stream en direct pour le moment
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {streams.map((stream, index) => (
          <motion.a
            key={stream.id}
            href={`https://twitch.tv/${stream.user_name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="card group relative overflow-hidden"
          >
            <div className="relative aspect-video mb-4">
              <img
                src={stream.thumbnail_url}
                alt={stream.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                {stream.viewer_count.toLocaleString()} spectateurs
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
              {stream.title}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-400">
              <img 
                src={stream.profile_image_url} 
                alt={`${stream.user_name}'s profile`} 
                className="w-6 h-6 rounded-full"
              />
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span>{stream.user_name}</span>
            </div>
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TwitchStreams; 