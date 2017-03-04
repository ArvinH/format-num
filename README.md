[![Published on webcomponents.org][webcomponents-image]][webcomponents-url]

# \<format-num\>
Web component: format number

Example:
<!---
```
<custom-element-demo>
  <template>
    <link rel="import" href="../src/formatNum.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<!-- 42.33M -->
<format-num num="42334354" digits="2"></format-num>

<!-- 42.334k -->
<format-num num="42334" digits="3"></format-num>

<!-- 4.233G -->
<format-num num="4233413233" digits="3" si></format-num>

<!-- 4.233B -->
<format-num num="4233413233" digits="3"></format-num>
```

[webcomponents-image]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/arvinh/format-num