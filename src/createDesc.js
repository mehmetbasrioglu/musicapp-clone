import React from 'react';

import Linkify from 'linkifyjs/react';

import * as linkify from 'linkifyjs';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from "linkifyjs/plugins/mention"

// index.js bootstrap included

hashtag(linkify);
mention(linkify)
function CreateDesc({...props}) {
  var linkifyOptions = 
    {
        formatHref: function (href, type) {
          if (type === 'hashtag') {
            href = 'https://twitter.com/hashtag/' + href.substring(1);
          }
          if (type === 'mention') {
            href = 'https://twitter.com/hashtag/' + href.substring(1);
          }
          return href;
        }
      }
  return (
    <div className={props.classDesc} id="desc">
<Linkify options={linkifyOptions} >
{props.desc}
</Linkify>
         </div>
  );
}


export default CreateDesc;
