# jQuery Auto Text Marquee

Khi sử dụng các loại điện thoại đời thấp, 1 menu nào đó có tiêu đề rất dài, khi ta di chuyển tới nó, nội dung của menu đó sẽ tự động scroll để ta có thể đọc hết nội dung. Plugin này được sinh ra cũng với mục đích vậy :D! Bạn có thể sử dụng nó để auto scroll tên của sản phẩm, tiêu đề bài viết, ...!

Hướng dẫn sử dụng:

* Nhúng jQuery và plugin
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="jquery.text-marquee.min.js"></script>
```
* Sử dụng
```
<script>
$(function() {
    $(selector).textMarquee({
        // Settings
    });
});
</script>
```
* Các cài đặt bạn có thể xem thêm ở HTML Marquee Element
    * scrollBehavior : Sets how the text is scrolled within the marquee
    * scrollDirection : Sets the direction of the scrolling within the marquee
    * scrollAmount : Sets the amount of scrolling at each interval in pixels
    * scrollLoop : Sets the number of times the marquee will scroll
    * scrollDelay : Together with scrollamount, sets the speed of the scrolling
* Callback functions:
    * onMouseHover : Callback function for on mousehover
    * onMouseOut : Callback function for on mouseout

