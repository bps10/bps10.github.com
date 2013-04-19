#Neitz color model

### Motivation
***
* Not actually going to be talking about Luv space.
* Has interesting property that distance within space is roughly uniform in terms of color discrimination.
* However, not currently correct, only a least squares approximation.

#### Purpose

* Develop a model of primate color processing. We have heard about this before. My project was to put these things into mathematical terms and see if we can predict color perception as observed experimentally.

#### Road map
1. Color matching, dichromacy and confusion lines.

	* We want to use color spaces to infer some principles about the underlying physiology.
	* Talk a little about dichromatic systems and the lines of confusion inherent in a dichromatic system.
	* This will lead us to talk about unique hues.

2. Color perception: standard model.

	* Think about how physiological system actually performs these computations.
	* Introduce the standard model in the field.
	* Present an example of how this model fails to account for certain observed percepts, in particular unique he naming.
	
3. Color perception: Neitz model.

	* Finally, think about the Neitz model of how color is processed, giving rise to perception. 
	* Assess how well this model predicts observed color percepts.

#### Color spaces
1. Go through the demonstration.
	* This is how color spaces were first derived.
	* We now have complete description of cone spectral sensitivities and optical filters, allowing us to build color spaces from the ground up.
	* Need to mention primaries here.
	
2. We have developed a system of equations that permit us to specify any arbitrary color in the visible spectrum.

	* While this might seem vague, this process demonstrates that we can create color through the linear combination of three functions.  
	* Basically, we can add up the signals coming from the cones to create color perception.
	* Here we are looking at color matching functions, but as we will see momentarily, these can be derived directly from the spectral sensitivity functions with which we are all familiar.

3. Why should we care:
	* How do we represent a spectrum of light in terms of perception.
	* Of major importance for many industries. Obviously visual work such as graphics, but also every carpet, paint, desk, tile. Everything has color! Need a system to specify what we mean.
	* We rely on this all the time in this lab, but don't necessarily think about it in formal terms.
	* Examples: Unique hues, 100 hue, anomaloscope, etc.
	* Can formally represent this in matrix notation. System A, brings us from Spectral Sensitivities to color matching functions.
	* Individual variability in color perception.

#### Neitz space

A series of linear transformations. Spare everyone the gory details ... for now!

1. Move from cones to 'fundamentals'

	* Correct for lens and macula filters.
	* These are the theoretical functions that describe how the three cones will respond to a spectrum of light.  This is all the nervous system has to interpret color.  From here we can contruct color matching functions. 
	
2. Fundamentals to color matching functions:

	* We can find the constants necessary to move from spectral sensitivity functions to experimentally observed color perception.
	* Not going to go into the details at this point.
	* Normalized to equal energy white
	* Negative lights - for now.

3. Normalize

	* This normalization provides us with a nice scenario where we can now specify color in two dimension since z = 1 - x - y: i.e. we can always find the third dimension from the other two.


### Color perception
***


#### Confusion lines

If this isn't making much sense, lets think a little about color deficiencies, which are more familiar to all of us.

**Tritan**: S-cone silencing. Directions along these paths will produce no change in the LM cones.

**Deutan**: M-cone silencing. Directions along these paths will produce no change in the LS cones.

**Protan**: L-cone silencing. Directions along these paths will produce no change in the MS cones.

Can we read cone ratios from this plot in a color normal individual?

#### L:M ratio

* Let's start by looking at the lines we just heard about. The tritan and deutan confusion lines. These are also called the spectral neutral points since they go through equal energy. 
* As I mentioned earlier we are interested in finding the appropriate combination of L, M and S cone signals to accurately describe color perception.
* We know that color perception is based on opponent processes.  Blue always opposes yellow, green always opposed red. 
* Therefore, we can define dichromatic confusion lines along which these BY and RG dichromatic systems will be nulled.
* We can define confusion lines for any arbitrary dichromatic system, which we can define as a combination of LMS cone signals.
* Unique hues are the spectral neutral point of opposing systems (Blue-Yellow, Red-Green).
* In a color normal individual, we posit that these spectral neutral points will be determined by the L:M cone ratio. 

#### Unique hues, failure of the 'Standard model'


**Unique hues.** 

* Opponent colors
* Spectral neutral points of BY, RG system.
* How things should plot out.

**Neutral points**

* Here we see results from two individuals identifying unique green.
* A large variance in unique green has been observed, but a parsimonious account of this variability has never been proposed.
* Modulated by S-(L+M), which are basically non-responsive at 520nm. Would need to balance the Blue (S cones) with the L+M signal, would require a massive amplification of the blue signal relative to the L+M. 

### Building a color model
***
#### neitz model
* Standard model - 90-95% of cones involved in red green perception and only 5-10% involved in blue yellow


(S+M+L) - L and (S+M+L) - M 

#### neitz model: first Stage

* Lens and macula filters, source of variability 
* Cone spectral sensitivity functions
* Correct for optical filters.

#### neitz model: second Stage

* Opponent mechanisms

#### neitz model: third Stage

* Summation

### Findings
***

#### Unique hues

* Very close agreement

#### Periphery

