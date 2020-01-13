export function host(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

export function timeAgo(time) {
  const between = (Date.now() - Date.parse(time)) / 1000;
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时');
  } else if (between < 2592000) {
    return pluralize(~~(between / 86400), ' 天');
  } else if (between < 31536000) {
    return pluralize(~~(between / 2592000), ' 月');
  } else {
    return pluralize(~~(between / 31104000), ' 年');
  }
}

function pluralize(time, label) {
  return time + label + '前';
}

export function tabSort(tab) {
  switch (tab) {
    case 'good':
      return '精华';
    case 'share':
      return '分享';
    case 'ask':
      return '问答';
    case 'job':
      return '招聘';
    case 'dev':
      return '测试';
    default:
      break;
  }
}
