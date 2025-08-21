<svelte:head>
	<title>Get Started — ModernBrands</title>
	<meta name="description" content="Choose a plan and purchase securely, or leave your details and we'll invoice." />
</svelte:head>

<!-- LUXURY HERO SECTION -->
<section style="background: linear-gradient(135deg, #FFF8F0 0%, #FCEFE3 25%, #FFF8F0 50%, #FCEFE3 75%, #FFF8F0 100%); padding: 10rem 1.5rem 8rem; text-align: center; position: relative; overflow: hidden;">
	<!-- Animated decorative elements -->
	<div style="position: absolute; inset: 0; pointer-events: none;">
		<div style="position: absolute; top: 10%; left: 8%; width: 1px; height: 80px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 8s ease-in-out infinite;"></div>
		<div style="position: absolute; top: 20%; right: 12%; width: 2px; height: 60px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 10s ease-in-out infinite reverse;"></div>
		<div style="position: absolute; bottom: 20%; left: 15%; width: 1px; height: 70px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 9s ease-in-out infinite;"></div>
		<div style="position: absolute; top: 70%; right: 8%; width: 1px; height: 50px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); animation: float 11s ease-in-out infinite reverse;"></div>
	</div>
	
	<!-- Subtle geometric pattern -->
	<div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 20% 80%, rgba(198,166,100,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(198,166,100,0.03) 0%, transparent 50%);"></div>
	
	<div style="max-width: 72rem; margin: 0 auto; position: relative;">
		<!-- Decorative line above eyebrow -->
		<div style="width: 80px; height: 1px; background: var(--gold); margin: 0 auto 3rem; opacity: 0.7;"></div>
		
		<div class="eyebrow" style="margin-bottom: 2rem; letter-spacing: 0.3em; font-size: 0.9rem; color: var(--gold); font-weight: 500;">CHOOSE YOUR PATH</div>
		
		<h1 style="font-family: var(--font-serif); font-size: clamp(3rem, 6vw, 5rem); font-weight: 600; margin: 0 0 2rem; color: var(--ink); line-height: 1.05; letter-spacing: -0.02em;">
			Dominate Your<br/>
			<span style="color: var(--gold); font-weight: 700;">Market</span>
		</h1>
		
		<p style="font-size: 1.375rem; color: rgba(10,10,10,0.7); max-width: 56rem; margin: 0 auto; line-height: 1.5; font-weight: 300; letter-spacing: 0.01em;">
			Select the perfect package for your brand's journey to market leadership. Each tier is crafted for maximum impact.
		</p>
		
		<!-- Decorative line below content -->
		<div style="width: 60px; height: 1px; background: var(--gold); margin: 4rem auto 0; opacity: 0.5;"></div>
	</div>
	
	<style>
		@keyframes float {
			0%, 100% { transform: translateY(0px); opacity: 0.6; }
			50% { transform: translateY(-25px); opacity: 1; }
		}
	</style>
</section>

<!-- STARTER PACKAGES - LUXURY EDITORIAL LAYOUT -->
<section style="max-width: 120rem; margin: 0 auto; padding: 6rem 1.5rem;">
	<!-- Section Header -->
	<div style="text-align: center; margin-bottom: 5rem;">
		<div class="eyebrow" style="margin-bottom: 1rem;">Starter Packages</div>
		<h2 style="font-family: var(--font-serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: var(--ink); margin: 0 0 1rem;">
			Foundation for Success
		</h2>
		<p style="font-size: 1.125rem; color: rgba(10,10,10,0.7); max-width: 48rem; margin: 0 auto;">
			Essential branding packages designed for ambitious startups and emerging businesses ready to make their mark.
		</p>
	</div>

	<!-- HERO VIDEO - Full Width Luxury -->
	<div style="margin-bottom: 5rem; position: relative;">
		<video autoplay muted loop playsinline style="width: 100%; height: 500px; object-fit: cover; border-radius: 1.5rem; border: 1px solid rgba(198,166,100,0.3);">
			<source src="/starter-4k.mp4" type="video/mp4" media="(min-width: 768px)" />
			<source src="/starter-720.mp4" type="video/mp4" />
		</video>
		<!-- Overlay with package info -->
		<div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 3rem 2rem 2rem; border-radius: 0 0 1.5rem 1.5rem;">
			<div style="max-width: 64rem; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: end;">
				<div>
					<div class="eyebrow" style="color: var(--gold); margin-bottom: 0.5rem;">Signature Mark</div>
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">$2,500</div>
				</div>
				<div>
					<div class="eyebrow" style="color: var(--gold); margin-bottom: 0.5rem;">Digital Canvas</div>
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">$5,000</div>
				</div>
				<div>
					<div class="eyebrow" style="color: var(--gold); margin-bottom: 0.5rem;">Brand in a Box</div>
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">$8,500</div>
				</div>
			</div>
		</div>
	</div>

	<!-- LUXURY 3-COLUMN LAYOUT -->
	<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; margin-bottom: 4rem;">
		<!-- Card 1: Signature Mark - Luxury Design -->
		<div style="background: white; border: 1px solid rgba(198,166,100,0.15); border-radius: 2rem; overflow: hidden; transition: all 0.4s ease; position: relative;" >
			<!-- Luxury header with enhanced design -->
			<div style="background: linear-gradient(135deg, #FCEFE3 0%, #FFF8F0 50%, #FCEFE3 100%); padding: 3rem 2.5rem 2.5rem; text-align: center; position: relative; overflow: hidden;">
				<!-- Decorative corner elements -->
				<div style="position: absolute; top: 0; left: 0; width: 0; height: 0; border-right: 60px solid transparent; border-top: 60px solid rgba(198,166,100,0.08);"></div>
				<div style="position: absolute; top: 0; right: 0; width: 0; height: 0; border-left: 60px solid transparent; border-top: 60px solid rgba(198,166,100,0.08);"></div>
				
				<!-- Decorative lines -->
				<div style="position: absolute; top: 1.5rem; left: 2rem; width: 2px; height: 2.5rem; background: linear-gradient(to bottom, var(--gold), transparent);"></div>
				<div style="position: absolute; top: 1.5rem; right: 2rem; width: 2px; height: 2.5rem; background: linear-gradient(to bottom, var(--gold), transparent);"></div>
				
				<div class="eyebrow" style="margin-bottom: 1rem; color: var(--gold); font-weight: 500; letter-spacing: 0.1em;">SIGNATURE MARK</div>
				<h3 style="font-family: var(--font-serif); font-size: 2.25rem; margin: 0 0 1rem; color: var(--ink); font-weight: 600;">Essential Branding</h3>
				<div style="font-family: var(--font-serif); font-size: 3rem; color: var(--gold); font-weight: 700; text-shadow: 0 2px 4px rgba(198,166,100,0.2);">$2,500</div>
			</div>
			
			<!-- Image section -->
			<div style="height: 250px; position: relative; overflow: hidden;">
				<img src="/signature-mark.png" alt="Signature Mark - Logo Design" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" 
					   />
			</div>
			
			<!-- Content -->
			<div style="padding: 2.5rem;">
				<p style="color: rgba(10,10,10,0.8); margin: 0 0 2rem; line-height: 1.7; font-size: 1.1rem;">
					Professional logo design with comprehensive brand guidelines. Perfect for startups and small businesses ready to make their mark in the market.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 1rem; font-size: 1.1rem;">What's Included:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Custom logo design (3 concepts)
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Brand guidelines document
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Logo variations (horizontal, vertical, icon)
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Color palette & typography
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Delivery in all formats
						</li>
					</ul>
				</div>
				<button class="btn" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600;" on:click={() => window.open('https://buy.stripe.com/pricing-table/prctbl_1RxysH2K0wLA8j3Go1ecWenh', '_blank')}>
					Get Started - $2,500
				</button>
			</div>
		</div>

		<!-- Card 2: Digital Canvas - Luxury Design -->
		<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; overflow: hidden; transition: all 0.3s ease; position: relative;" >
			<!-- Luxury header -->
			<div style="background: linear-gradient(135deg, #FCEFE3 0%, #FFF8F0 100%); padding: 2.5rem 2rem 2rem; text-align: center; position: relative;">
				<div style="position: absolute; top: 1rem; left: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div style="position: absolute; top: 1rem; right: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div class="eyebrow" style="margin-bottom: 0.5rem;">Digital Canvas</div>
				<h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 0 0 0.5rem; color: var(--ink);">Complete Identity</h3>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600;">$5,000</div>
			</div>
			
			<!-- Image section -->
			<div style="height: 250px; position: relative; overflow: hidden;">
				<img src="/digital-canvas.png" alt="Digital Canvas - Brand Identity" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" />
			</div>
			
			<!-- Content -->
			<div style="padding: 2.5rem;">
				<p style="color: rgba(10,10,10,0.8); margin: 0 0 2rem; line-height: 1.7; font-size: 1.1rem;">
					Full brand identity system including logo, website, and digital assets. For businesses ready to dominate their market with a complete digital presence.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 1rem; font-size: 1.1rem;">What's Included:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Everything in Signature Mark
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Custom website design
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Social media templates
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Business card design
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Brand voice & messaging
						</li>
					</ul>
				</div>
				<button class="btn" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600;" on:click={() => window.open('https://buy.stripe.com/pricing-table/prctbl_1RxysH2K0wLA8j3Go1ecWenh', '_blank')}>
					Get Started - $5,000
				</button>
			</div>
		</div>

		<!-- Card 3: Brand in a Box - Luxury Design -->
		<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; overflow: hidden; transition: all 0.3s ease; position: relative;" >
			<!-- Luxury header -->
			<div style="background: linear-gradient(135deg, #FCEFE3 0%, #FFF8F0 100%); padding: 2.5rem 2rem 2rem; text-align: center; position: relative;">
				<div style="position: absolute; top: 1rem; left: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div style="position: absolute; top: 1rem; right: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div class="eyebrow" style="margin-bottom: 0.5rem;">Brand in a Box</div>
				<h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 0 0 0.5rem; color: var(--ink);">Complete Package</h3>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600;">$8,500</div>
			</div>
			
			<!-- Image section -->
			<div style="height: 250px; position: relative; overflow: hidden;">
				<img src="/brand-bundle.png" alt="Brand in a Box - Complete Package" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" />
			</div>
			
			<!-- Content -->
			<div style="padding: 2.5rem;">
				<p style="color: rgba(10,10,10,0.8); margin: 0 0 2rem; line-height: 1.7; font-size: 1.1rem;">
					Everything you need to launch and dominate. Complete brand system with strategy, design, and implementation for maximum market impact.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 1rem; font-size: 1.1rem;">What's Included:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Everything in Digital Canvas
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Brand strategy & positioning
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Marketing materials
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Launch campaign
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							3 months of support
						</li>
					</ul>
				</div>
				<button class="btn" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600;" on:click={() => window.open('https://buy.stripe.com/pricing-table/prctbl_1RxysH2K0wLA8j3Go1ecWenh', '_blank')>
					Get Started - $8,500
				</button>
			</div>
		</div>
	</div>
</section>

<!-- PROFESSIONAL PACKAGES - LUXURY EDITORIAL LAYOUT -->
<section style="background: linear-gradient(135deg, #0B1736 0%, #1a2a4a 50%, #0B1736 100%); padding: 6rem 1.5rem; color: white;">
	<!-- Section Header -->
	<div style="text-align: center; margin-bottom: 5rem;">
		<div class="eyebrow" style="margin-bottom: 1rem; color: var(--gold);">Professional Packages</div>
		<h2 style="font-family: var(--font-serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: white; margin: 0 0 1rem;">
			Market Domination
		</h2>
		<p style="font-size: 1.125rem; color: rgba(255,255,255,0.8); max-width: 48rem; margin: 0 auto;">
			Premium branding solutions for established companies ready to dominate their industry and scale to new heights.
		</p>
	</div>

	<!-- HERO VIDEO - Full Width Luxury -->
	<div style="margin-bottom: 5rem; position: relative;">
		<video autoplay muted loop playsinline style="width: 100%; height: 500px; object-fit: cover; border-radius: 1.5rem; border: 1px solid rgba(198,166,100,0.3);">
			<source src="/professional-4k.mp4" type="video/mp4" media="(min-width: 768px)" />
			<source src="/professional-720.mp4" type="video/mp4" />
		</video>
		<!-- Overlay with package info -->
		<div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 3rem 2rem 2rem; border-radius: 0 0 1.5rem 1.5rem;">
			<div style="max-width: 64rem; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: end;">
				<div>
					<div class="eyebrow" style="color: var(--gold); margin-bottom: 0.5rem;">Enterprise Branding</div>
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">$15,000</div>
				</div>
				<div>
					<div class="eyebrow" style="color: var(--gold); margin-bottom: 0.5rem;">Digital Transformation</div>
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">$25,000</div>
				</div>
				<div>
					<div class="eyebrow" style="color: var(--gold); margin-bottom: 0.5rem;">Brand Ecosystem</div>
					<div style="font-family: var(--font-serif); font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">$50,000</div>
				</div>
			</div>
		</div>
	</div>

	<!-- LUXURY 3-COLUMN LAYOUT -->
	<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 3rem; margin-bottom: 4rem;">
		<!-- Card 1: Enterprise Branding - Luxury Design -->
		<div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(198,166,100,0.3); border-radius: 1.5rem; overflow: hidden; transition: all 0.3s ease; position: relative; backdrop-filter: blur(10px);" 
			 >
			<!-- Luxury header -->
			<div style="background: linear-gradient(135deg, rgba(198,166,100,0.1) 0%, rgba(198,166,100,0.05) 100%); padding: 2.5rem 2rem 2rem; text-align: center; position: relative;">
				<div style="position: absolute; top: 1rem; left: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div style="position: absolute; top: 1rem; right: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div class="eyebrow" style="margin-bottom: 0.5rem; color: var(--gold);">Enterprise Branding</div>
				<h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 0 0 0.5rem; color: white;">Corporate Identity</h3>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600;">$15,000</div>
			</div>
			
			<!-- Image section -->
			<div style="height: 250px; position: relative; overflow: hidden;">
				<img src="/brand-foundation.png" alt="Enterprise Branding" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" 
					 } } />
			</div>
			
			<!-- Content -->
			<div style="padding: 2.5rem;">
				<p style="color: rgba(255,255,255,0.9); margin: 0 0 2rem; line-height: 1.7; font-size: 1.1rem;">
					Comprehensive brand foundation for established companies. Strategic positioning with premium execution for maximum market impact.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: white; margin-bottom: 1rem; font-size: 1.1rem;">What's Included:</div>
					<ul style="color: rgba(255,255,255,0.8); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Brand audit & strategy
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Corporate identity system
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Brand guidelines (100+ pages)
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Internal brand training
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Rollout strategy
						</li>
					</ul>
				</div>
				<button class="btn" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600; background: var(--gold); color: var(--ink);" on:click={() => window.open('https://buy.stripe.com/pricing-table/prctbl_1RxxKK2K0wLA8j3G9h9tjOrs', '_blank')>
					Get Started - $15,000
				</button>
			</div>
		</div>

		<!-- Card 2: Digital Transformation - Luxury Design -->
		<div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(198,166,100,0.3); border-radius: 1.5rem; overflow: hidden; transition: all 0.3s ease; position: relative; backdrop-filter: blur(10px);" 
			 >
			<!-- Luxury header -->
			<div style="background: linear-gradient(135deg, rgba(198,166,100,0.1) 0%, rgba(198,166,100,0.05) 100%); padding: 2.5rem 2rem 2rem; text-align: center; position: relative;">
				<div style="position: absolute; top: 1rem; left: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div style="position: absolute; top: 1rem; right: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div class="eyebrow" style="margin-bottom: 0.5rem; color: var(--gold);">Digital Transformation</div>
				<h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 0 0 0.5rem; color: white;">Growth Accelerator</h3>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600;">$25,000</div>
			</div>
			
			<!-- Image section -->
			<div style="height: 250px; position: relative; overflow: hidden;">
				<img src="/growth-accelerator.png" alt="Digital Transformation" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" 
					 } } />
			</div>
			
			<!-- Content -->
			<div style="padding: 2.5rem;">
				<p style="color: rgba(255,255,255,0.9); margin: 0 0 2rem; line-height: 1.7; font-size: 1.1rem;">
					Complete digital presence overhaul with growth strategy. For companies ready to scale rapidly and dominate their market.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: white; margin-bottom: 1rem; font-size: 1.1rem;">What's Included:</div>
					<ul style="color: rgba(255,255,255,0.8); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Everything in Enterprise
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Advanced website platform
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Marketing automation
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Content strategy
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Analytics & optimization
						</li>
					</ul>
				</div>
				<button class="btn" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600; background: var(--gold); color: var(--ink);" on:click={() => window.open('https://buy.stripe.com/pricing-table/prctbl_1RxxKK2K0wLA8j3G9h9tjOrs', '_blank')>
					Get Started - $25,000
				</button>
			</div>
		</div>

		<!-- Card 3: Brand Ecosystem - Luxury Design -->
		<div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(198,166,100,0.3); border-radius: 1.5rem; overflow: hidden; transition: all 0.3s ease; position: relative; backdrop-filter: blur(10px);" 
			 >
			<!-- Luxury header -->
			<div style="background: linear-gradient(135deg, rgba(198,166,100,0.1) 0%, rgba(198,166,100,0.05) 100%); padding: 2.5rem 2rem 2rem; text-align: center; position: relative;">
				<div style="position: absolute; top: 1rem; left: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div style="position: absolute; top: 1rem; right: 1rem; width: 2px; height: 2rem; background: var(--gold);"></div>
				<div class="eyebrow" style="margin-bottom: 0.5rem; color: var(--gold);">Brand Ecosystem</div>
				<h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 0 0 0.5rem; color: white;">Market Domination</h3>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600;">$50,000</div>
			</div>
			
			<!-- Image section -->
			<div style="height: 250px; position: relative; overflow: hidden;">
				<img src="/market-domination.png" alt="Brand Ecosystem" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" 
					 } } />
			</div>
			
			<!-- Content -->
			<div style="padding: 2.5rem;">
				<p style="color: rgba(255,255,255,0.9); margin: 0 0 2rem; line-height: 1.7; font-size: 1.1rem;">
					Complete brand ecosystem with ongoing strategy. For companies that want to dominate their industry and expand globally.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: white; margin-bottom: 1rem; font-size: 1.1rem;">What's Included:</div>
					<ul style="color: rgba(255,255,255,0.8); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Everything in Transformation
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Ongoing brand management
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Market expansion strategy
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Partnership development
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							12 months of support
						</li>
					</ul>
				</div>
				<button class="btn" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600; background: var(--gold); color: var(--ink);" on:click={() => window.open('https://buy.stripe.com/pricing-table/prctbl_1RxxKK2K0wLA8j3G9h9tjOrs', '_blank')>
					Get Started - $50,000
				</button>
			</div>
		</div>
	</div>
</section>

<!-- LUXURY CONTACT SECTION -->
<section style="background: linear-gradient(135deg, #FFF8F0 0%, #FCEFE3 100%); padding: 6rem 1.5rem; text-align: center;">
	<div style="max-width: 48rem; margin: 0 auto;">
		<div class="eyebrow" style="margin-bottom: 1rem;">Alternative Contact</div>
		<h2 style="font-family: var(--font-serif); font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 600; color: var(--ink); margin: 0 0 1rem;">
			Prefer to Discuss Your Project?
		</h2>
		<p style="font-size: 1.125rem; color: rgba(10,10,10,0.8); margin: 0 0 3rem; line-height: 1.6;">
			Leave your details and we'll create a custom proposal tailored to your brand's unique needs.
		</p>
		
		<!-- Luxury Form -->
		<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; padding: 3rem; box-shadow: 0 10px 30px rgba(198,166,100,0.1);">
			<form style="display: grid; gap: 1.5rem;" action="https://formsubmit.co/sales@thekpsgroup.com" method="POST">
				<input type="hidden" name="_subject" value="ModernBrands — Get Started Lead" />
				<input type="hidden" name="_next" value="/get-started#thanks" />
				<input type="hidden" name="_captcha" value="false" />
				
				<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
					<label style="display: block;">
						<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Name</span>
						<input required name="name" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; transition: border-color 0.3s ease;" 
							   } } />
					</label>
					<label style="display: block;">
						<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Email</span>
						<input required type="email" name="email" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; transition: border-color 0.3s ease;" 
							   } } />
					</label>
				</div>
				
				<label style="display: block;">
					<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Phone</span>
					<input name="phone" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; transition: border-color 0.3s ease;" 
						   } } />
				</label>
				
				<label style="display: block;">
					<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Project Details</span>
					<textarea name="notes" rows="4" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; resize: vertical; transition: border-color 0.3s ease;" 
							  placeholder="Tell us about your brand vision, target audience, and goals..." 
							  } on:blur={(e) => { e.target.style.borderColor='rgba(198,166,100,0.3)' ></textarea>
				</label>
				
				<button class="btn" style="width: fit-content; margin: 0 auto; padding: 1.25rem 3rem; font-size: 1.1rem; font-weight: 600;" type="submit">
					Submit Project Details
				</button>
			</form>
			
			<div id="thanks" style="margin-top: 2rem; padding: 1.5rem; background: rgba(198,166,100,0.1); border-radius: 0.75rem; font-size: 1rem; color: var(--ink); display: none;">
				Thank you — we'll get back to you within 24 hours with a custom proposal.
			</div>
		</div>
	</div>
</section>
