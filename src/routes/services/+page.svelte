<svelte:head>
	<title>Services — ModernBrands</title>
	<meta name="description" content="Luxury branding services that transform businesses into market leaders. Strategy, design, and execution that drives results." />
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
		
		<div class="eyebrow" style="margin-bottom: 2rem; letter-spacing: 0.3em; font-size: 0.9rem; color: var(--gold); font-weight: 500;">OUR SERVICES</div>
		
		<h1 style="font-family: var(--font-serif); font-size: clamp(3rem, 6vw, 5rem); font-weight: 600; margin: 0 0 2rem; color: var(--ink); line-height: 1.05; letter-spacing: -0.02em;">
			Modern Branding,<br/>
			<span style="color: var(--gold); font-weight: 700;">Ruthlessly Executed</span>
		</h1>
		
		<p style="font-size: 1.375rem; color: rgba(10,10,10,0.7); max-width: 56rem; margin: 0 auto; line-height: 1.5; font-weight: 300; letter-spacing: 0.01em;">
			We focus on outcomes, not deliverables. Every service is designed to transform your brand into a market-dominating force.
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

<!-- SERVICES OVERVIEW -->
<section style="max-width: 120rem; margin: 0 auto; padding: 6rem 1.5rem;">
	<!-- Our Process -->
	<div style="margin-bottom: 6rem;">
		<div style="text-align: center; margin-bottom: 4rem;">
			<div class="eyebrow" style="margin-bottom: 1rem;">Our Process</div>
			<h2 style="font-family: var(--font-serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: var(--ink); margin: 0 0 1rem;">
				The ModernBrands Method
			</h2>
			<p style="font-size: 1.125rem; color: rgba(10,10,10,0.7); max-width: 48rem; margin: 0 auto;">
				A proven three-phase approach that transforms brands and drives measurable results.
			</p>
		</div>

		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 3rem;">
			<!-- Phase 1 -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.15); border-radius: 2rem; padding: 3rem; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden;" 
				 onmouseenter="this.style.transform='translateY(-12px)'; this.style.boxShadow='0 30px 60px rgba(198,166,100,0.2)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<!-- Decorative background element -->
				<div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(198,166,100,0.05) 0%, transparent 70%); border-radius: 50%;"></div>
				
				<div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--gold) 0%, #D4B87A 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; font-family: var(--font-serif); font-size: 2rem; color: white; font-weight: 600; box-shadow: 0 8px 24px rgba(198,166,100,0.3);">1</div>
				<h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0 0 1.5rem; color: var(--ink); font-weight: 600;">Strategic Foundation</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.7; font-size: 1.1rem; font-weight: 300;">We analyze your market position, identify opportunities, and create a strategic roadmap that aligns your brand with your business goals.</p>
			</div>

			<!-- Phase 2 -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.15); border-radius: 2rem; padding: 3rem; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden;" 
				 onmouseenter="this.style.transform='translateY(-12px)'; this.style.boxShadow='0 30px 60px rgba(198,166,100,0.2)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<!-- Decorative background element -->
				<div style="position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(198,166,100,0.05) 0%, transparent 70%); border-radius: 50%;"></div>
				
				<div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--gold) 0%, #D4B87A 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; font-family: var(--font-serif); font-size: 2rem; color: white; font-weight: 600; box-shadow: 0 8px 24px rgba(198,166,100,0.3);">2</div>
				<h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0 0 1.5rem; color: var(--ink); font-weight: 600;">Design & Build</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.7; font-size: 1.1rem; font-weight: 300;">We create stunning design systems and build with ruthless speed, ensuring every element serves your strategic objectives.</p>
			</div>

			<!-- Phase 3 -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.15); border-radius: 2rem; padding: 3rem; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden;" 
				 onmouseenter="this.style.transform='translateY(-12px)'; this.style.boxShadow='0 30px 60px rgba(198,166,100,0.2)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<!-- Decorative background element -->
				<div style="position: absolute; bottom: -50px; right: -50px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(198,166,100,0.05) 0%, transparent 70%); border-radius: 50%;"></div>
				
				<div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--gold) 0%, #D4B87A 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; font-family: var(--font-serif); font-size: 2rem; color: white; font-weight: 600; box-shadow: 0 8px 24px rgba(198,166,100,0.3);">3</div>
				<h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0 0 1.5rem; color: var(--ink); font-weight: 600;">Launch & Optimize</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.7; font-size: 1.1rem; font-weight: 300;">We ship, index, measure, and iterate. Continuous optimization ensures your brand maintains its competitive edge.</p>
			</div>
		</div>
	</div>

	<!-- Core Services -->
	<div style="margin-bottom: 6rem;">
		<div style="text-align: center; margin-bottom: 4rem;">
			<div class="eyebrow" style="margin-bottom: 1rem;">Core Services</div>
			<h2 style="font-family: var(--font-serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: var(--ink); margin: 0 0 1rem;">
				What We Deliver
			</h2>
			<p style="font-size: 1.125rem; color: rgba(10,10,10,0.7); max-width: 48rem; margin: 0 auto;">
				Comprehensive branding solutions that transform your business and dominate your market.
			</p>
		</div>

		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 3rem;">
			<!-- Brand Strategy -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.15); border-radius: 2rem; padding: 3rem; transition: all 0.4s ease; position: relative; overflow: hidden;" 
				 onmouseenter="this.style.transform='translateY(-12px)'; this.style.boxShadow='0 30px 60px rgba(198,166,100,0.2)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<!-- Decorative corner element -->
				<div style="position: absolute; top: 0; right: 0; width: 0; height: 0; border-left: 60px solid transparent; border-top: 60px solid rgba(198,166,100,0.05);"></div>
				
				<div class="eyebrow" style="margin-bottom: 1rem; color: var(--gold); font-weight: 500;">BRAND STRATEGY</div>
				<h3 style="font-family: var(--font-serif); font-size: 2rem; margin: 0 0 1.5rem; color: var(--ink); font-weight: 600;">Strategic Positioning</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.7; margin-bottom: 2rem; font-size: 1.1rem; font-weight: 300;">
					We analyze your market, competitors, and audience to create a strategic foundation that positions your brand for maximum impact.
				</p>
				<div style="margin-bottom: 2rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 1rem; font-size: 1.1rem;">Key Benefits:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.8; padding-left: 0;">
						<li style="margin-bottom: 0.75rem; padding-left: 2rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold); font-size: 1.2rem;">•</span>
							Clear market differentiation
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 2rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold); font-size: 1.2rem;">•</span>
							Targeted audience alignment
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 2rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold); font-size: 1.2rem;">•</span>
							Competitive advantage identification
						</li>
						<li style="margin-bottom: 0.75rem; padding-left: 2rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold); font-size: 1.2rem;">•</span>
							Scalable growth framework
						</li>
					</ul>
				</div>
			</div>

			<!-- Visual Identity -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; padding: 2.5rem; transition: all 0.3s ease;" 
				 onmouseenter="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 25px 50px rgba(198,166,100,0.15)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<div class="eyebrow" style="margin-bottom: 0.5rem;">Visual Identity</div>
				<h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0 0 1rem; color: var(--ink);">Design Systems</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.6; margin-bottom: 1.5rem;">
					We create comprehensive visual identities that communicate your brand's essence and create lasting impressions.
				</p>
				<div style="margin-bottom: 1.5rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 0.75rem;">Key Benefits:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.6; padding-left: 0;">
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Memorable brand recognition
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Consistent visual language
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Professional credibility
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Scalable design framework
						</li>
					</ul>
				</div>
			</div>

			<!-- Digital Presence -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; padding: 2.5rem; transition: all 0.3s ease;" 
				 onmouseenter="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 25px 50px rgba(198,166,100,0.15)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<div class="eyebrow" style="margin-bottom: 0.5rem;">Digital Presence</div>
				<h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0 0 1rem; color: var(--ink);">Web & Digital</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.6; margin-bottom: 1.5rem;">
					We build stunning digital experiences that convert visitors into customers and establish your online authority.
				</p>
				<div style="margin-bottom: 1.5rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 0.75rem;">Key Benefits:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.6; padding-left: 0;">
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Increased conversion rates
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Enhanced user experience
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Improved search visibility
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Mobile-first optimization
						</li>
					</ul>
				</div>
			</div>

			<!-- Content Strategy -->
			<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; padding: 2.5rem; transition: all 0.3s ease;" 
				 onmouseenter="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 25px 50px rgba(198,166,100,0.15)'" 
				 onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
				<div class="eyebrow" style="margin-bottom: 0.5rem;">Content Strategy</div>
				<h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0 0 1rem; color: var(--ink);">Messaging & Voice</h3>
				<p style="color: rgba(10,10,10,0.7); line-height: 1.6; margin-bottom: 1.5rem;">
					We develop compelling messaging that resonates with your audience and drives action across all touchpoints.
				</p>
				<div style="margin-bottom: 1.5rem;">
					<div style="font-weight: 600; color: var(--ink); margin-bottom: 0.75rem;">Key Benefits:</div>
					<ul style="color: rgba(10,10,10,0.7); line-height: 1.6; padding-left: 0;">
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Clear value proposition
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Emotional connection
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Consistent communication
						</li>
						<li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
							<span style="position: absolute; left: 0; color: var(--gold);">•</span>
							Increased engagement
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Results Section -->
	<div style="background: linear-gradient(135deg, #0B1736 0%, #1a2a4a 50%, #0B1736 100%); padding: 4rem 2rem; border-radius: 1.5rem; text-align: center; color: white; margin-bottom: 4rem;">
		<div class="eyebrow" style="margin-bottom: 1rem; color: var(--gold);">Proven Results</div>
		<h2 style="font-family: var(--font-serif); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 600; margin: 0 0 1rem;">
			Transform Your Market Position
		</h2>
		<p style="font-size: 1.25rem; color: rgba(255,255,255,0.9); max-width: 48rem; margin: 0 auto 2rem; line-height: 1.6;">
			0 → 500+ organic searches in 30–60 days when we fix structure, schema, and story.
		</p>
		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 48rem; margin: 0 auto;">
			<div>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600; margin-bottom: 0.5rem;">500+</div>
				<div style="color: rgba(255,255,255,0.8);">Organic Searches</div>
			</div>
			<div>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600; margin-bottom: 0.5rem;">30-60</div>
				<div style="color: rgba(255,255,255,0.8);">Days to Results</div>
			</div>
			<div>
				<div style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--gold); font-weight: 600; margin-bottom: 0.5rem;">100%</div>
				<div style="color: rgba(255,255,255,0.8);">Client Focus</div>
			</div>
		</div>
		<p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 2rem;">Results are illustrative and not guaranteed. Individual performance may vary.</p>
	</div>

	<!-- CTA Section -->
	<div style="text-align: center; margin-bottom: 4rem;">
		<h2 style="font-family: var(--font-serif); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 600; color: var(--ink); margin: 0 0 1rem;">
			Ready to Modernize Your Brand?
		</h2>
		<p style="font-size: 1.125rem; color: rgba(10,10,10,0.7); max-width: 48rem; margin: 0 auto 2rem;">
			Let's transform your brand into a market-dominating force. Choose your path to success.
		</p>
		<a href="/get-started" class="btn" style="font-size: 1.1rem; padding: 1.25rem 3rem;">Get Started Today</a>
	</div>
</section>

<!-- LUXURY CONTACT SECTION -->
<section style="background: linear-gradient(135deg, #FFF8F0 0%, #FCEFE3 100%); padding: 6rem 1.5rem; text-align: center;">
	<div style="max-width: 48rem; margin: 0 auto;">
		<div class="eyebrow" style="margin-bottom: 1rem;">Get In Touch</div>
		<h2 style="font-family: var(--font-serif); font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 600; color: var(--ink); margin: 0 0 1rem;">
			Discuss Your Project
		</h2>
		<p style="font-size: 1.125rem; color: rgba(10,10,10,0.8); margin: 0 0 3rem; line-height: 1.6;">
			Tell us about your brand vision and we'll create a custom strategy to help you dominate your market.
		</p>
		
		<!-- Luxury Form -->
		<div style="background: white; border: 1px solid rgba(198,166,100,0.2); border-radius: 1.5rem; padding: 3rem; box-shadow: 0 10px 30px rgba(198,166,100,0.1);">
			<form style="display: grid; gap: 1.5rem;" action="https://formsubmit.co/sales@thekpsgroup.com" method="POST">
				<input type="hidden" name="_subject" value="ModernBrands — Services Lead" />
				<input type="hidden" name="_next" value="/services#thanks" />
				<input type="hidden" name="_captcha" value="false" />
				
				<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
					<label style="display: block;">
						<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Name</span>
						<input required name="name" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; transition: border-color 0.3s ease;" 
							   onfocus="this.style.borderColor='var(--gold)'" onblur="this.style.borderColor='rgba(198,166,100,0.3)'" />
					</label>
					<label style="display: block;">
						<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Email</span>
						<input required type="email" name="email" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; transition: border-color 0.3s ease;" 
							   onfocus="this.style.borderColor='var(--gold)'" onblur="this.style.borderColor='rgba(198,166,100,0.3)'" />
					</label>
				</div>
				
				<label style="display: block;">
					<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Phone</span>
					<input name="phone" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; transition: border-color 0.3s ease;" 
						   onfocus="this.style.borderColor='var(--gold)'" onblur="this.style.borderColor='rgba(198,166,100,0.3)'" />
				</label>
				
				<label style="display: block;">
					<span class="eyebrow" style="margin-bottom: 0.5rem; display: block;">Project Details</span>
					<textarea name="message" rows="4" style="width: 100%; border: 1px solid rgba(198,166,100,0.3); border-radius: 0.75rem; padding: 1rem 1.25rem; background: white; font-size: 1rem; resize: vertical; transition: border-color 0.3s ease;" 
							  placeholder="Tell us about your brand, target audience, and goals..." 
							  onfocus="this.style.borderColor='var(--gold)'" onblur="this.style.borderColor='rgba(198,166,100,0.3)'"></textarea>
				</label>
				
				<button class="btn" style="width: fit-content; margin: 0 auto; padding: 1.25rem 3rem; font-size: 1.1rem; font-weight: 600;" type="submit">
					Send Message
				</button>
			</form>
			
			<div id="thanks" style="margin-top: 2rem; padding: 1.5rem; background: rgba(198,166,100,0.1); border-radius: 0.75rem; font-size: 1rem; color: var(--ink); display: none;">
				Thank you — we'll get back to you within 24 hours with a custom strategy.
			</div>
		</div>
	</div>
</section>
