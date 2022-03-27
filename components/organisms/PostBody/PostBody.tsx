import { Typography } from '@mui/material';

type PostBodyType = {
  content: any;
  title: string;
};

export default function PostBody({ content, title }: PostBodyType) {
  return (
    <div className="max-w-2xl mx-auto">
      <Typography variant="h1" fontSize={30}>
        {title}
      </Typography>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
