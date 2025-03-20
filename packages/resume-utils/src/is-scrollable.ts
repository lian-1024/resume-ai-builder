/**
 * 检查当前元素是否可滚动
 * @param element 检查的元素
 * @returns {boolean} 是否可以滚动
 */
export const isScrollable = (element: HTMLElement): boolean => {
  // 获取元素的计算样式
  const style = window.getComputedStyle(element);
  
  // 检查元素是否设置了可滚动的样式
  const hasScrollableStyle = 
    style.overflow === 'scroll' ||
    style.overflow === 'auto';

  // 检查水平和垂直方向是否设置了可滚动样式
  const hasScrollableXStyle = 
    hasScrollableStyle ||
    style.overflowX === 'scroll' ||
    style.overflowX === 'auto';

  const hasScrollableYStyle =
    hasScrollableStyle ||
    style.overflowY === 'scroll' ||
    style.overflowY === 'auto';

  // 检查元素是否实际可滚动(内容是否大于可视区域)
  const isActuallyScrollableX = element.scrollWidth > element.clientWidth;
  const isActuallyScrollableY = element.scrollHeight > element.clientHeight;

  // 任一方向可滚动即返回true
  return (hasScrollableXStyle && isActuallyScrollableX) || 
         (hasScrollableYStyle && isActuallyScrollableY);
}