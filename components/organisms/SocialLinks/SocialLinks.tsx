import Box from '@mui/material/Box';
import DribbleIcon from '../../../icons/dribble.svg';
import FacebookIcon from '../../../icons/facebook.svg';
import GithubIcon from '../../../icons/github.svg';
import InstagramIcon from '../../../icons/instagram.svg';
import LinkedinIcon from '../../../icons/linkedin.svg';
import MediumIcon from '../../../icons/medium.svg';
import StackOverflowIcon from '../../../icons/stackoverflow.svg';
import TwitterIcon from '../../../icons/twitter.svg';
import YouTubeIcon from '../../../icons/youtube.svg';
import DevIcon from '../../../icons/dev.svg';
import { IconButton, SvgIcon } from '@mui/material';

type SocialLinksType = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  stackoverflow?: string;
  devto?: string;
  medium?: string;
  dribble?: string;
  youtube?: string;
};

function SocialLinks(data: SocialLinksType) {
  return (
    <Box
      mt={2}
      mr={5}
      ml={5}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {data.facebook && (
        <IconButton href={data.facebook} target="_blank">
          <SvgIcon component={FacebookIcon} inheritViewBox />
        </IconButton>
      )}
      {data.instagram && (
        <IconButton href={data.instagram} target="_blank">
          <SvgIcon component={InstagramIcon} inheritViewBox />
        </IconButton>
      )}
      {data.twitter && (
        <IconButton href={data.twitter} target="_blank">
          <SvgIcon component={TwitterIcon} inheritViewBox />
        </IconButton>
      )}
      {data.github && (
        <IconButton href={data.github} target="_blank">
          <SvgIcon component={GithubIcon} inheritViewBox />
        </IconButton>
      )}
      {data.linkedin && (
        <IconButton href={data.linkedin} target="_blank">
          <SvgIcon component={LinkedinIcon} inheritViewBox />
        </IconButton>
      )}
      {data.stackoverflow && (
        <IconButton href={data.stackoverflow} target="_blank">
          <SvgIcon component={StackOverflowIcon} inheritViewBox />
        </IconButton>
      )}
      {data.devto && (
        <IconButton href={data.devto} target="_blank">
          <SvgIcon component={DevIcon} inheritViewBox />
        </IconButton>
      )}
      {data.medium && (
        <IconButton href={data.medium} target="_blank">
          <SvgIcon component={MediumIcon} inheritViewBox />
        </IconButton>
      )}
      {data.dribble && (
        <IconButton href={data.dribble} target="_blank">
          <SvgIcon component={DribbleIcon} inheritViewBox />
        </IconButton>
      )}
      {data.youtube && (
        <IconButton href={data.youtube} target="_blank">
          <SvgIcon component={YouTubeIcon} inheritViewBox />
        </IconButton>
      )}
    </Box>
  );
}

export default SocialLinks;
