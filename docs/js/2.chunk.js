webpackJsonp([2],{151:function(e,n){e.exports={template:'<div class="markdown-body"><h3 id="-">日期示例</h3>\n<vuep template="#demo1"></vuep>\n\n<script v-pre type="text/x-template" id="demo1">\n  <style>\n    .text {\n      color: #4fc08d;\n    }\n  </style>\n\n  <template>\n    <div>\n      <h3 class="text">date - input</h3>\n      <div>\n        <input class="example-input"\n               v-verify.input.blur="\'required|date\'"\n               data-verify-dom=".date-error"\n               placeholder="yyyy-mm-dd"/>\n        <span class="date-error example-error"></span>\n      </div>\n      <h3 class="text">date - initial</h3>\n      <div>\n        <input v-model="time"\n               class="example-input"\n               v-verify.input.initial="\'required|date\'"\n               data-verify-dom=".date-error"\n               placeholder="yyyy-mm-dd"/>\n        <span class="date-error example-error"></span>\n      </div>\n    </div>\n  </template>\n\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2017/09/09\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h3 id="-">使用指令修饰符</h3>\n<p>v-verify 可以添加 <code>vue</code> 指令修饰符 focus 、input 、blur 、change 、 initial 等修饰符表示验证器触发等时机</p>\n<h3 id="-">指令表达式</h3>\n<p>v－verify 表达式值可以为一组字符串表示的验证器，多个验证器之间用符号 <code>|</code> 分割，指令v-verify将依次验证分割后的验证器。</p>\n<h3 id="-">使用自定义属性</h3>\n<p>属性 <code>data-verify-dom</code> 表示当验证不通过时，提示消息展示的dom容器,其值为选择器</p>\n<blockquote>\n<p>这里的 <code>data-verify-dom</code> 和 <code>input</code> 必需拥有同一个父元素 不然将无法查找到 data-verify-dom</p>\n</blockquote>\n</div>'}}});
//# sourceMappingURL=2.chunk.js.map