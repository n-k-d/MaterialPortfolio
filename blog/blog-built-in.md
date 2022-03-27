---
title: 'Built in Next.js, TypeScript, MUI with ❤️'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
slug: 'blog-built-in'
tags: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'mui']
date: '2022-02-23T05:35:07.322Z'
---

## H2 Lorem Ipsum:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec magna non dolor lacinia accumsan. Ut a tincidunt urna, sit amet porttitor tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sit amet congue nunc. Aenean rutrum rhoncus dui, at ultrices est lacinia ac. Nulla dapibus, elit sed vestibulum ultricies, lacus arcu feugiat lacus, ut bibendum leo justo non orci. Vivamus tincidunt hendrerit eros. Nunc in egestas lacus. Aenean volutpat, purus a porta accumsan, lorem libero euismod massa, nec ultricies nisi leo sed ante.

```
Mauris vel euismod ligula. Sed in ipsum vitae ante convallis semper non et nisl. Proin ligula metus, fermentum quis tristique in, laoreet vitae velit. Mauris nulla est, congue a varius id, varius non metus. Aliquam vitae volutpat quam. Cras quis risus dolor. Curabitur commodo euismod eleifend. Nam ullamcorper eleifend justo vitae commodo.
```

Morbi eu _hendrerit_ felis. Nam at elit commodo, lobortis sem eget, venenatis est. Sed nec dapibus metus. Morbi gravida vulputate iaculis. Donec accumsan odio ac lobortis dapibus. Etiam viverra mauris at orci feugiat, quis lobortis metus sodales. Mauris ac diam diam. Aenean faucibus commodo nibh ut interdum. Proin faucibus maximus felis, ac fringilla ante sagittis sit amet. Sed suscipit in ipsum id _hendrerit_. Nullam pharetra pharetra quam facilisis faucibus.

### H3 Lorem Ipsum:

Quisque fringilla nunc sit amet erat posuere malesuada. Sed rutrum, dui sit amet iaculis laoreet, dolor magna scelerisque arcu, sed scelerisque quam arcu quis augue. Integer mi metus, volutpat non pretium a, scelerisque ut diam. Fusce imperdiet, orci ac ultricies convallis, mi velit volutpat turpis, non condimentum massa orci nec neque. Ut vitae nisl vitae ex dictum viverra in scelerisque elit. Integer quis erat enim. Cras maximus nulla eget libero fringilla viverra. Vivamus lobortis vel orci ut accumsan. Donec lobortis eget turpis at egestas. Vestibulum lobortis a arcu nec varius. Pellentesque volutpat in arcu sit amet porttitor. Sed nec tempus nisl, at blandit sapien.

Vestibulum ut maximus neque. Sed nec quam mauris. Integer lobortis ultrices enim. Pellentesque viverra faucibus odio, sed vehicula felis. Donec vitae tortor et tortor molestie fringilla. Etiam sed volutpat lectus. Aliquam erat volutpat. Donec efficitur sodales felis. Vestibulum fermentum commodo lectus eu blandit. Etiam pulvinar eros nulla, vitae laoreet ex tristique a. Pellentesque luctus sagittis dui quis convallis. Morbi lacinia mi vel molestie lobortis. Nunc pharetra accumsan convallis.

```js
import { Typography } from '@mui/material';

type PostBodyType = {
  content: any,
  title: string,
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
```

#### H4 Lorem Ipsum:

Vestibulum euismod dolor quis sagittis accumsan. Praesent varius accumsan tortor nec bibendum. Sed vestibulum tortor ut neque vestibulum molestie. Aenean ac consectetur dui. Nam quis mi commodo, consectetur mauris sed, scelerisque est. Nullam sed velit dapibus, porta lorem eu, vehicula odio. Donec vehicula lectus dolor, quis vulputate neque faucibus vel. Morbi lobortis mi massa, quis maximus lacus pretium non. Morbi viverra, odio sit amet posuere malesuada, tellus nunc molestie diam, vel sodales quam erat at tortor. Sed quis nulla vitae dolor sagittis vehicula. Mauris efficitur vestibulum pretium. Donec porta nisi et lorem hendrerit vulputate.

Vivamus id consequat ante. Mauris volutpat in magna non semper. Nulla in neque in orci tristique vestibulum a ac nisi. Mauris ullamcorper viverra risus, at laoreet libero maximus eget. Etiam nulla dui, congue sit amet lorem tempus, sodales iaculis ante. Etiam vel lectus sollicitudin, efficitur leo nec, facilisis nisi. Suspendisse quis ligula felis. Aenean dictum egestas quam vel auctor. Maecenas orci ligula, cursus a ligula vel, euismod vestibulum ante. In aliquam interdum pellentesque. Sed et placerat augue, ut rutrum augue.

##### H5 Lorem Ipsum:

Sed feugiat, ipsum et iaculis vehicula, urna tellus molestie elit, ut semper justo orci vitae ex. Praesent gravida pellentesque gravida. Mauris ultrices tellus ultricies, tempor ligula et, lacinia neque. Nunc molestie diam ut ipsum varius vehicula eget semper odio. Donec ut magna vitae augue commodo tempus. Praesent blandit porta ex a semper. Suspendisse at ex vulputate, maximus lectus vel, euismod enim. Proin rutrum eros id ultricies congue.

Integer tellus turpis, posuere vitae metus a, consequat maximus magna. Donec ut sapien orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id bibendum lorem. Vivamus ut laoreet metus. Vestibulum auctor in augue a sollicitudin. Nam iaculis sodales lorem. Quisque commodo finibus magna. Quisque sed velit id est mollis faucibus. Nullam suscipit sapien mauris, vel blandit risus molestie sed. Nam vehicula euismod libero, sit amet condimentum eros accumsan at. Donec egestas nisi arcu, a commodo dui sagittis vel. Suspendisse nec odio eu ex auctor rhoncus quis et magna.

```json
{
  "name": "John Doe",
  "profileImage": "me.png",
  "siteName": "A sample blog",
  "siteUrl": "https://hello.com",
  "description": [
    {
      "title": "About",
      "description":
        "Hi, I am John Doe. Integer tellus turpis, posuere vitae metus a, consequat maximus magna. Donec ut sapien orci. Vestibulum ante ipsum primis in faucibus orci."
    },
}
```

Nam ut ornare felis. Nullam sodales risus non fringilla semper. In aliquam egestas velit vel pharetra. Integer viverra tempus elementum. Sed pretium, elit eget dapibus mattis, sapien nulla ornare augue, nec suscipit nunc lorem sit amet odio. Nulla eros magna, elementum in felis sit amet, porttitor dictum diam. Pellentesque lobortis magna vel ex venenatis dapibus. Donec eget lorem quis ligula vehicula elementum non aliquet eros. Donec ex urna, hendrerit eu vehicula eget, tristique at leo. Nullam ornare tempus eleifend. Sed orci felis, eleifend in sodales a, sagittis vel velit. In sed nulla leo. Nullam congue sollicitudin tortor in varius. Nunc in lorem varius, feugiat elit eu, convallis eros. Praesent egestas ullamcorper felis non venenatis.
