import React from 'react';
import detective from '../../assets/images/icon/detective.png';
import closeBtn from '../../assets/images/icon/close.png';
import { post } from '../../utils/api';
import tw from 'tailwind-styled-components';

const Participant = ({ isLeader, participantList, postId, memberListData }) => {
  const deleteData = async (userId) => {
    await post('/api/matching-situation/leader', { matchingPostsId: postId, userId });
    memberListData();
  };

  const handleKickOut = (participant) => {
    const userId = participant.userId;
    // 참가 취소
    deleteData(userId);
  };

  return (
    <>
      {participantList.map((participant) => (
        <Container key={participant.nickName}>
          <Count>
            <img src={detective} alt='탐정 이모지' className='w-[20px] h-[23px] inline-block pt-[3px]' />
            <span className='pl-[3px] font-semibold mb-[10px]'>{participant.count}</span>
          </Count>
          {isLeader && (
            <button onClick={() => handleKickOut(participant)}>
              <img className='w-5 h-5' src={closeBtn} alt='삭제 버튼' />
            </button>
          )}
          <ProfileImg src={detective} alt='프로필 이미지' />
          <NickName>{participant.nickName}</NickName>
          <div className='flex justify-between mx-[40px]'>
            <Score>{participant.escapeScore}</Score>
            <Score>{participant.mannerScore}</Score>
          </div>
        </Container>
      ))}
    </>
  );
};

export default Participant;

const Container = tw.div`
  border-slate-100
  border-[3px]
  w-[250px]
  h-[350px]
  inline-block
  mx-[20px]
  mt-[140px]
  mb-[80px]
  rounded-[15px]
  bg-gradient-to-b
  from-[#3e7dab]
  to-[#c994c2]

  text-center
`;

const ProfileImg = tw.img`
  w-[180px]
  h-[180px]
  rounded-[50%]
  border-4
  border-[#e9b306]
  object-cover
  shadow-lg
  mx-auto
`;

const Count = tw.span`
  text-lg
  flex
  ml-[10px]
  mt-[5px]
`;

const NickName = tw.div`
  text-3xl
  font-bold
  text-white
  my-[18px]
`;

const Score = tw.span`
  inline-block
  w-[70px]
  h-[30px]
  rounded-[30px]
  bg-black
  text-white
  text-lg
`;
