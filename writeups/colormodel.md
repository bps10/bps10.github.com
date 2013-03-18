#Stage 1
***

$$LMS = \frac{LMS}{lens + macula}$$

<figure>
  <img src="../presentations/static/figures/colorModel/fundamentals.png" alt="somethings"
  width="400" height="300" style="margin: 0 auto;">
</figure>

#Stage 2
***

$$L_{channel} = \int\_{\lambda=390}^{750} \Big(w(q S\_{\lambda} + (1-l) M\_{\lambda} + l L\_{\lambda}) - L\_{\lambda}\Big) d\lambda = 0$$

$$M_{channel} = \int\_{\lambda=390}^{750} \Big(w(q S\_{\lambda} + (1-l) M\_{\lambda} + l L\_{\lambda}) - M\_{\lambda}\Big) d\lambda = 0$$

## 25% L

<figure>
  <img src="../presentations/static/figures/colorModel/familyLMS_25L.png" alt="somethings"
  width="425" height="400" style="margin: 0 auto;">
</figure>

## 75% L

<figure>
  <img src="../presentations/static/figures/colorModel/familyLMS_75L.png" alt="somethings"
  width="425" height="400" style="margin: 0 auto;">
</figure>


#Stage 3
***

$$RG= \sum\_{m=0}^{100} \sum\_{l=0}^{100} L\_{channel\_{l,m}} * P(S|l)$$

$$BY = \sum\_{m=0}^{100} \sum\_{l=0}^{100} M\_{channel\_{l,m}} * P(S|l)$$

$$P(S|l) = \binom{n}{l} P\_{L}^{l} (1 - P\_{L})^{n - l},$$

where $n = l + m$.

<figure>
  <img src="../presentations/static/figures/colorModel/PercentL.png" alt="somethings"
  width="425" height="550" style="margin: 0 auto;">
</figure>



<figure>
  <img src="../presentations/static/figures/colorModel/uniqueHues.png" alt="somethings"
  width="400" height="300" style="margin: 0 auto;">
</figure>

#Unique hues, LM ratio comparison
***

<figure>
  <img src="../presentations/static/figures/colorModel/uniqueHues_LMcomparison_Volbrecht.png" alt="somethings"
  width="425" height="550" style="margin: 0 auto;">
</figure>


<script type="text/javascript">

	formatImages = function (percentage) {
		console.log(document.images);
		for( i=0; i < document.images.length; i++)
		{ 
			width = document.images[i].naturalWidth * percentage / 100.0;
			height = document.images[i].naturalHeight  * percentage / 100.0;
			
			window.document.images[i].setAttribute("width",width);
			window.document.images[i].setAttribute("height",height);

		}
		return window
	};

	console.log('here');
	//formatImages(30);
	console.log('here1');
</script>

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

