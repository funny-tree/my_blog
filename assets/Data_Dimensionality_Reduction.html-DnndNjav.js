import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as n,o as a}from"./app-D4fD6dZE.js";const o={};function r(s,e){return a(),i("div",null,e[0]||(e[0]=[n('<p>When there is only one dependent variable, but multiple independent variables, it is necessary to reduce the dimensionality of the data to reduce the difficulty of exploring the relationship between the independent variables and the dependent variable.</p><p>For example:</p><p>Exploring the relationship between the GDP of a region and various indicators of that region, such as the market share of various industries, the volume of rail freight and passenger traffic, the age and education level of the labor force, etc.</p><p>When there are many independent variables and it is not known how they relate to the dependent variable, it is necessary to select a few more relevant variables.</p><h2 id="principal-component-analysis-pca" tabindex="-1"><a class="header-anchor" href="#principal-component-analysis-pca"><span>Principal Component Analysis (PCA)</span></a></h2><h3 id="principle" tabindex="-1"><a class="header-anchor" href="#principle"><span>Principle</span></a></h3><p>PCA is a data processing method used to extract key information.<br> 【In the most intuitive way to tell you: what is principal component analysis PCA】 <a href="https://www.bilibili.com/video/BV1E5411E71z/?share_source=copy_web&amp;vd_source=168197ae85661ef61147bf7747a6edb0" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1E5411E71z/?share_source=copy_web&amp;vd_source=168197ae85661ef61147bf7747a6edb0</a></p><p>After performing PCA on a dataset with n variables, n principal components (which are actually new variables under the new coordinate axes) are obtained, and each principal component has a contribution rate, the higher the contribution rate, the more important it is, which means it is more important for restoring the original points, so only the principal components with high contribution rates can be discussed, achieving data dimensionality reduction.</p><p>You can imagine a three-dimensional coordinate system xyz, where there are several points, I translate and rotate this coordinate system to create a new coordinate system x1y1z1, and make them as close to the x1 axis as possible, followed by the y1 axis, for the coordinate system xyz, the coordinate vector (i.e., the vector from the origin to the point) of each point is composed of 0.33 of the x-axis component, 0.33 of the y-axis component, and 0.34 of the z-axis component, which is too average, then for the coordinate system x1y1z1, the coordinate vector of each point is composed of 0.7 of the x1-axis component, 0.25 of the y1-axis component, and the z1-axis is not important, so it can be directly ignored, which also achieves data compression.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>For mathematical modeling, we can decide the name of the principal component by looking at the contribution of each variable to different principal components.</p><p>(ps: Each principal component has a contribution to the overall, and each variable also has a contribution to each principal component, which are two different things)</p><p>For example: To explore a student&#39;s academic level, nine subjects are too many, I perform PCA, get nine principal components, among which the contribution of mathematics to the first principal component ranks first, physics second, chemistry third, so I can call this principal component &quot;Science Level&quot;, and for the second principal component, language ranks first, politics second, history third, so I can call this principal component &quot;Humanities Level&quot;, then these two principal components have a high enough total contribution rate, and I can ignore the subsequent principal components, I only discuss the relationship between academic level and Humanities Level, Science Level.</p><h3 id="number-of-principal-components-and-selection" tabindex="-1"><a class="header-anchor" href="#number-of-principal-components-and-selection"><span>Number of Principal Components and Selection</span></a></h3><p>Calculate the variance contribution rate, and then implement it by accumulating the variance contribution rate of the first n principal components, if the cumulative variance contribution rate of the first n principal components exceeds 85%, it is sufficient.</p><h2 id="application-conditions" tabindex="-1"><a class="header-anchor" href="#application-conditions"><span>Application Conditions</span></a></h2><ol><li><p>Requires a certain correlation between variables</p></li><li><p>Mainly used for dimensionality reduction, also for evaluation</p></li></ol><h3 id="implementation-steps" tabindex="-1"><a class="header-anchor" href="#implementation-steps"><span>Implementation Steps</span></a></h3><ol><li><p>Standardize and non-dimensionalize the original data</p></li><li><p>Establish the correlation coefficient matrix or covariance matrix of the variables</p></li><li><p>Obtain the eigenvalues and corresponding unit eigenvectors of the matrix</p></li><li><p>Write out the principal component expression and principal component scores</p></li><li><p>Determine the number of principal components k</p></li><li><p>Calculate the comprehensive evaluation score of the i-th sample observation</p></li><li><p>Principal component explanation and naming</p></li></ol><h2 id="factor-analysis" tabindex="-1"><a class="header-anchor" href="#factor-analysis"><span>Factor Analysis</span></a></h2><p>A thing very similar to (or opposite to) principal component analysis<br> The principle of principal component analysis is to use the original coordinates to represent the principal component coordinates, factor analysis is to use the factor coordinates to represent the original coordinates</p><h3 id="implementation-steps-1" tabindex="-1"><a class="header-anchor" href="#implementation-steps-1"><span>Implementation Steps</span></a></h3><ol><li>Perform the following two tests:</li></ol><p>KMO test, KMO&gt;0.9, very suitable; 0.9&gt;KMO&gt;0.8 suitable; 0.8&gt;KMO&gt;0.7 general</p><p>Bartlett&#39;s sphericity test, if the value is large, and its corresponding p-value is less than the user&#39;s desired significance level (less than 0.05), then the null hypothesis that the correlation coefficient is not likely to be a unit matrix should be rejected, i.e., there is correlation between the original variables, suitable for factor analysis. Otherwise, it is not suitable for factor analysis.</p>',25)]))}const c=t(o,[["render",r],["__file","Data_Dimensionality_Reduction.html.vue"]]),h=JSON.parse(`{"path":"/essay/about_mathematical_modeling/Data_Dimensionality_Reduction.html","title":"Data Dimensionality Reduction","lang":"en-US","frontmatter":{"title":"Data Dimensionality Reduction","icon":"file","order":3,"author":"Mr.滑稽","date":"2025-01-20T00:00:00.000Z","category":["mathematical modeling"],"sticky":true,"star":true,"footer":null,"copyright":"无版权","description":"When there is only one dependent variable, but multiple independent variables, it is necessary to reduce the dimensionality of the data to reduce the difficulty of exploring the...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mister-hope.github.io/tree-blog/zh/essay/about_mathematical_modeling/Data_Dimensionality_Reduction.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/tree-blog/essay/about_mathematical_modeling/Data_Dimensionality_Reduction.html"}],["meta",{"property":"og:site_name","content":"funny tree's Blog"}],["meta",{"property":"og:title","content":"Data Dimensionality Reduction"}],["meta",{"property":"og:description","content":"When there is only one dependent variable, but multiple independent variables, it is necessary to reduce the dimensionality of the data to reduce the difficulty of exploring the..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.滑稽"}],["meta",{"property":"article:published_time","content":"2025-01-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Dimensionality Reduction\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-01-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.滑稽\\"}]}"]]},"headers":[{"level":2,"title":"Principal Component Analysis (PCA)","slug":"principal-component-analysis-pca","link":"#principal-component-analysis-pca","children":[{"level":3,"title":"Principle","slug":"principle","link":"#principle","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Number of Principal Components and Selection","slug":"number-of-principal-components-and-selection","link":"#number-of-principal-components-and-selection","children":[]}]},{"level":2,"title":"Application Conditions","slug":"application-conditions","link":"#application-conditions","children":[{"level":3,"title":"Implementation Steps","slug":"implementation-steps","link":"#implementation-steps","children":[]}]},{"level":2,"title":"Factor Analysis","slug":"factor-analysis","link":"#factor-analysis","children":[{"level":3,"title":"Implementation Steps","slug":"implementation-steps-1","link":"#implementation-steps-1","children":[]}]}],"git":{},"readingTime":{"minutes":2.96,"words":888},"filePathRelative":"essay/about_mathematical_modeling/Data_Dimensionality_Reduction.md","localizedDate":"January 20, 2025","excerpt":"<p>When there is only one dependent variable, but multiple independent variables, it is necessary to reduce the dimensionality of the data to reduce the difficulty of exploring the relationship between the independent variables and the dependent variable.</p>\\n<p>For example:</p>\\n<p>Exploring the relationship between the GDP of a region and various indicators of that region, such as the market share of various industries, the volume of rail freight and passenger traffic, the age and education level of the labor force, etc.</p>","autoDesc":true}`);export{c as comp,h as data};
