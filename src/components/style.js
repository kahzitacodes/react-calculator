import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: #C3C3EC;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Content = styled.div`
   background-color: #FFF;
   border-radius: 16px;
   box-shadow: 0 6px 0px 0 rgb(168, 168, 228), 0 10px 40px 0px rgba(14,24,43, 0.08);
   padding: 20px;
   min-height: 350px;
   min-width: 400px;
`;

export const GridContent = styled.div`
   display: grid;
   grid-template-areas: 
      "GridNumbers GridSigns1"
      "GridNumbers GridSigns2"
   ;
   grid-template-columns: 3fr 2fr;
   grid-template-rows: repeat(2, 1fr);
   gap: 12px;
`;
export const GridNumbers = styled.div`
   display: grid;
   grid-area: GridNumbers;
   grid-template-columns: repeat(3, 1fr);
   gap: 12px;
`;

export const GridSigns1 = styled.div`
   display: grid;
   grid-area: GridSigns1;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr 1fr;
   gap: 12px;
`;

export const GridSigns2 = styled.div`
   display: grid;
   grid-area: GridSigns2;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
`;
