import { StyledFitImage } from '@/components/common/UI/StyledUI';
import { Work } from '@/services/works/types';
import { FC } from 'react';
import styled from 'styled-components';

const WorksCard: FC<{ work: Work }> = ({ work }) => {
  return (
    <Card>
      <Thumbnail>
        <img src={work.thumbnail} alt="" />
      </Thumbnail>
      <Content>
        <Title>{work.title}</Title>
        <Tags>
          {work.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </Tags>
        <Description>{work.description}</Description>
      </Content>
    </Card>
  );
};

export default WorksCard;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;
const Thumbnail = styled(StyledFitImage)`
  width: calc(100% * (4 / 9));
`;
const Content = styled.div`
  width: calc(100% * (4 / 9));
`;
const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme: { color } }) => color.text.strong};
  margin-bottom: 1rem;
`;
const Tags = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
  li {
    display: inline-block;
    margin-right: 1rem;
  }
`;
const Description = styled.p``;
