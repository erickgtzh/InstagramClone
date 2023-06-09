import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={() => setIsLiked(v => !v)} hitSlop={6}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {color: colors.black, fontWeight: fonts.weight.bold},
  icon: {marginHorizontal: 5},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {color: colors.black},
  avatar: {width: 40, aspectRatio: 1, borderRadius: 25, marginRight: 5},
  footer: {flexDirection: 'row', marginBottom: 10},
  footerText: {marginRight: 10, color: colors.grey},
  middleColumn: {flex: 1},
});

export default Comment;
