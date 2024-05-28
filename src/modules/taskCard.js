export function expandCollapse() {
  const expandableText = document.querySelector('#expand-collapse');
  const expandCollapseBtn = document.querySelector('#expand-collapse-btn');
  const expandCollapseBtnSpan = document.querySelector(
    '#expand-collapse-btn > span',
  );
  const showMore = 'Show more';
  const showLess = 'Show less';

  // Expand
  expandableText.classList.toggle('expandable-textarea');
  expandCollapseBtn.classList.toggle('expand-btn');

  // Collapse
  expandableText.classList.toggle('collapsable-textarea');
  expandCollapseBtn.classList.toggle('collapse-btn');

  expandCollapseBtn.classList.contains('expand-btn')
    ? (expandCollapseBtnSpan.innerText = showMore)
    : (expandCollapseBtnSpan.innerText = showLess);
}
