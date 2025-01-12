import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as e}from"./app-KjEtfJ6c.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h2 id="_1、生成字符串与生成字符串切片" tabindex="-1"><a class="header-anchor" href="#_1、生成字符串与生成字符串切片"><span>1、生成字符串与生成字符串切片</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//生成字符串为str的复制品s</span></span>
<span class="line"><span>//string s(string str);</span></span>
<span class="line"><span>string s(&quot;abc&quot;);</span></span>
<span class="line"><span>//s为&quot;abc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//生成字符串str中从下标为begin开始长度为len的字符串复制s</span></span>
<span class="line"><span>//string s(string str,int begin,int len);</span></span>
<span class="line"><span>string s(&quot;abcde&quot;,1,3);</span></span>
<span class="line"><span>//s为&quot;bcd&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//生成字符串str中从下标为begin开始长度为len的字符串</span></span>
<span class="line"><span>//方法substr(int begin,int len);</span></span>
<span class="line"><span>str(&quot;abcd&quot;);</span></span>
<span class="line"><span>string s=str.substr(1,2);</span></span>
<span class="line"><span>//s为&quot;bc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、插入与拼接" tabindex="-1"><a class="header-anchor" href="#_2、插入与拼接"><span>2、插入与拼接</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//在字符串s的尾部拼接上字符c</span></span>
<span class="line"><span>//方法push_back(char c);</span></span>
<span class="line"><span>string s(&quot;abc&quot;);</span></span>
<span class="line"><span>s.push_back(&#39;a&#39;);</span></span>
<span class="line"><span>//s为&quot;abca&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在字符串s中下标为index的位置插入字符c,该位置原字母与后续字母顺延</span></span>
<span class="line"><span>//方法insert(int index,char c);</span></span>
<span class="line"><span>string s(&quot;abc&quot;);</span></span>
<span class="line"><span>s.insert(2,&#39;a&#39;);</span></span>
<span class="line"><span>//s为&quot;abac&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在字符串s的尾部拼接上字符串str</span></span>
<span class="line"><span>//方法append(string str);</span></span>
<span class="line"><span>string s(&quot;abc&quot;);</span></span>
<span class="line"><span>s.append(&quot;abc&quot;);</span></span>
<span class="line"><span>//s为&quot;abcabc&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、替换与删除" tabindex="-1"><a class="header-anchor" href="#_3、替换与删除"><span>3、替换与删除</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//将字符串s中，从下标begin开始长度为len的字符替换为str</span></span>
<span class="line"><span>//方法replace(int begin,int len,string str)</span></span>
<span class="line"><span>string s(&quot;abcde&quot;);</span></span>
<span class="line"><span>s.replace(1,3,&quot;aa&quot;);</span></span>
<span class="line"><span>//s为&quot;aaae&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除字符串S中下标为index的字符,后续字符补上</span></span>
<span class="line"><span>//方法erase(int index);</span></span>
<span class="line"><span>string s(&quot;abc&quot;);</span></span>
<span class="line"><span>s.erase(1);</span></span>
<span class="line"><span>//s为&quot;ac&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除字符串s中下标从head到rear的所有字符，后续字符补上</span></span>
<span class="line"><span>//方法erase(int head,int rear);</span></span>
<span class="line"><span>string s(&quot;0123456&quot;);</span></span>
<span class="line"><span>s.erase(1,5);</span></span>
<span class="line"><span>//s为&quot;06&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、查找" tabindex="-1"><a class="header-anchor" href="#_4、查找"><span>4、查找</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//在字符串s中查找子串str</span></span>
<span class="line"><span>//方法find(string str);</span></span>
<span class="line"><span>//找得到返回第一个符合的子串首字符下标，找不到返回-1</span></span>
<span class="line"><span>string s(&quot;aa bb cc dd aa&quot;);</span></span>
<span class="line"><span>i=s.find(&quot;aa&quot;);</span></span>
<span class="line"><span>//i为0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//从下标为begin的地方开始查找子串str</span></span>
<span class="line"><span>//方法find(string str,int begin);</span></span>
<span class="line"><span>//找得到返回第一个符合的子串首字符下标，找不到返回-1</span></span>
<span class="line"><span>string s(&quot;aa bb cc dd aa&quot;);</span></span>
<span class="line"><span>i=s.find(&quot;aa&quot;,5);</span></span>
<span class="line"><span>//返回12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//反向检索字符串s，查找其中的子串str</span></span>
<span class="line"><span>//方法rfind(string str);</span></span>
<span class="line"><span>//找得到返回第一个符合的子串首字符下标，找不到返回-1</span></span>
<span class="line"><span>string s(&quot;aa bb cc dd aa&quot;);</span></span>
<span class="line"><span>i=s.find(&quot;aa&quot;);</span></span>
<span class="line"><span>//i为12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、类型转化" tabindex="-1"><a class="header-anchor" href="#_5、类型转化"><span>5、类型转化</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//将字符串s转化为整形和长整型</span></span>
<span class="line"><span>//int stoi(string s);</span></span>
<span class="line"><span>//long long stoll(string s);</span></span>
<span class="line"><span>i=stoi(&quot;123&quot;);</span></span>
<span class="line"><span>//i为int(123)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//将字符串s转化为浮点型</span></span>
<span class="line"><span>//float stof(string s);</span></span>
<span class="line"><span>//double stod(string s);</span></span>
<span class="line"><span>i=stod(&quot;0011.1100)</span></span>
<span class="line"><span>//i为double(11.11)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//将数字number转化为字符串</span></span>
<span class="line"><span>//string to_string(double number);</span></span>
<span class="line"><span>//string to_string(long long number);</span></span>
<span class="line"><span>i=to_string(12.34);</span></span>
<span class="line"><span>//i为&quot;12.34&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const c=n(l,[["render",p],["__file","about_string.html.vue"]]),u=JSON.parse('{"path":"/zh/essay/Some_commonly_used_functions/about_string.html","title":"有关string类型常用的函数","lang":"zh-CN","frontmatter":{"title":"有关string类型常用的函数","icon":"file","order":3,"author":"Mr.滑稽","date":"2025-01-12T00:00:00.000Z","category":["c++","函数"],"tag":["tips"],"sticky":false,"star":false,"copyright":"无版权","description":"1、生成字符串与生成字符串切片 2、插入与拼接 3、替换与删除 4、查找 5、类型转化","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/my_blog/essay/Some_commonly_used_functions/about_string.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/my_blog/zh/essay/Some_commonly_used_functions/about_string.html"}],["meta",{"property":"og:site_name","content":"滑稽的博客"}],["meta",{"property":"og:title","content":"有关string类型常用的函数"}],["meta",{"property":"og:description","content":"1、生成字符串与生成字符串切片 2、插入与拼接 3、替换与删除 4、查找 5、类型转化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.滑稽"}],["meta",{"property":"article:tag","content":"tips"}],["meta",{"property":"article:published_time","content":"2025-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有关string类型常用的函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.滑稽\\"}]}"]]},"headers":[{"level":2,"title":"1、生成字符串与生成字符串切片","slug":"_1、生成字符串与生成字符串切片","link":"#_1、生成字符串与生成字符串切片","children":[]},{"level":2,"title":"2、插入与拼接","slug":"_2、插入与拼接","link":"#_2、插入与拼接","children":[]},{"level":2,"title":"3、替换与删除","slug":"_3、替换与删除","link":"#_3、替换与删除","children":[]},{"level":2,"title":"4、查找","slug":"_4、查找","link":"#_4、查找","children":[]},{"level":2,"title":"5、类型转化","slug":"_5、类型转化","link":"#_5、类型转化","children":[]}],"git":{},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"zh/essay/Some_commonly_used_functions/about_string.md","localizedDate":"2025年1月12日","excerpt":"<h2>1、生成字符串与生成字符串切片</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>//生成字符串为str的复制品s</span></span>\\n<span class=\\"line\\"><span>//string s(string str);</span></span>\\n<span class=\\"line\\"><span>string s(\\"abc\\");</span></span>\\n<span class=\\"line\\"><span>//s为\\"abc\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>//生成字符串str中从下标为begin开始长度为len的字符串复制s</span></span>\\n<span class=\\"line\\"><span>//string s(string str,int begin,int len);</span></span>\\n<span class=\\"line\\"><span>string s(\\"abcde\\",1,3);</span></span>\\n<span class=\\"line\\"><span>//s为\\"bcd\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>//生成字符串str中从下标为begin开始长度为len的字符串</span></span>\\n<span class=\\"line\\"><span>//方法substr(int begin,int len);</span></span>\\n<span class=\\"line\\"><span>str(\\"abcd\\");</span></span>\\n<span class=\\"line\\"><span>string s=str.substr(1,2);</span></span>\\n<span class=\\"line\\"><span>//s为\\"bc</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,u as data};
