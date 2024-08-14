import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';

interface VideoPlayerProps {
  // Add any props you want to pass to the VideoPlayer component
}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const video = React.useRef<any>(null);

  const handlePlayPause = () => {
    if (video.current) {
      video.current.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
    }
  };

  return (
    <View>
      <Video
        ref={video}
        source={require('../../assets/videos_mp4/exodia_obliterate.mp4')}
        muted={false}
        style={{ width: '100%', height: 300 }}
      />
      <TouchableOpacity onPress={handlePlayPause}>
        <Text>{video.current?.isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;
