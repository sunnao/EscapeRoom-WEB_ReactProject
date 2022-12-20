import React from 'react';
import tw from 'tailwind-styled-components';

import Background from '../components/common/Background';
import RecruitTypeIcon from '../components/recruit/RecruitTypeIcon';
import { RegionButton } from '../components/buttons/Buttons';
import MarkerDescription from '../components/recruit-map/MarkerDescription';

import markerBw from '../assets/images/icon/marker-bw.png';
import markerColor from '../assets/images/icon/marker-color.png';

const RecruitMap = () => {
  return (
    <Background img={'bg3'}>
      <UpperPart className=' flex flex-col'>
        <RecruitTypeIcon></RecruitTypeIcon>
        <RegionButtonsContainer>
          <RegionButton title={'홍대'}></RegionButton>
          <RegionButton title={'강남'}></RegionButton>
          <RegionButton title={'건대'}></RegionButton>
        </RegionButtonsContainer>
      </UpperPart>
      <LowerPart className='flex flex-col px-[10vw]'>
        <MarkerDescriptionsBox className='flex ml-auto mt-4 mb-8 drop-shadow-md'>
          <MarkerDescription src={markerColor} alt='marker-color' description={'모집중'}></MarkerDescription>
          <MarkerDescription src={markerBw} alt='marker-bw' description={'모집완료'}></MarkerDescription>
        </MarkerDescriptionsBox>
        <MapContainer></MapContainer>
      </LowerPart>
    </Background>
  );
};

const MapContainer = tw.div`
  w-[1250px] h-[700px] bg-white opacity-60 rounded-2xl
`;

const UpperPart = tw.div`
  px-[10vw]
`;

const LowerPart = tw.div`
  px-[10vw]
`;

const MarkerDescriptionsBox = tw.div`
  flex-row
`;

const RegionButtonsContainer = tw.div`
  m-auto
`;

export default RecruitMap;
