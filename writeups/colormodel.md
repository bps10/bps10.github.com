#Stage 1
***

$$\frac{LMS}{lens + macula}$$

![text](./presentations/static/figures/colorModel/fundamentals.png)

#Stage 2
***

$$L_{channel} = \int\_{i=390}^{750} w(q S\_{i} + (1-l) M\_{i} + l L\_{i}) - L\_{i} = 0$$

$$M_{channel} = \int\_{i=390}^{750} w(q S\_{i} + (1-l) M\_{i} + l L\_{i}) - M\_{i} = 0$$

## 25% L
![text](./presentations/static/figures/colorModel/familyLMS_25L.png)

## 75% L
![text](./presentations/static/figures/colorModel/familyLMS_75L.png)

#Stage 3
***

$$Red:Green = \sum\_{m=0}^{100} \sum\_{l=0}^{100} L\_{channel\_{l,m}} * P(S|l)$$

$$Blue:Yellow = \sum\_{m=0}^{100} \sum\_{l=0}^{100} M\_{channel\_{l,m}} * P(S|l)$$

$$P(S|l) = \binom{n}{L} P\_{l}^{L} (1 - P\_{l})^{n - L},$$

where $n = L + M$.


![text](./presentations/static/figures/colorModel/PercentL.png)
![text](./presentations/static/figures/colorModel/uniqueHues.png)

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js">
        MathJax.Hub.Config({
            config: ["MMLorHTML.js"],
            extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
            jax: ["input/TeX"],
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                processEscapes: false
            },
            TeX: {
                TagSide: "right",
                TagIndent: ".8em",
                MultLineWidth: "85%",
                equationNumbers: {
                   autoNumber: "AMS",
                },
                unicode: {
                   fonts: "STIXGeneral,'Arial Unicode MS'" 
                }
            },
            showProcessingMessages: false
        });
    </script>

