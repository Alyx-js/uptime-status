import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = data.date.format('YYYY-MM-DD');
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` RUNNING ${fixed(data.uptime)}%`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' NO DATA';
    }
    else {
      status = 'down';
      text += ` DOWN ${data.down.times} times，For ${formatDuration(data.down.duration)}，Uptime: ${fixed(data.uptime)}%`;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;
