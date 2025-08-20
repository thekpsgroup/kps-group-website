<svelte:head>
	<title>Get Started — ModernBrands</title>
	<meta name="description" content="Choose a plan and purchase securely, or leave your details and we'll invoice." />
</svelte:head>

<section style="max-width:72rem; margin:0 auto; padding:4rem 1.5rem; display:grid; gap:3rem;">
	<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
	<div style="display:grid; gap:3rem;">
		<div>
			<div class="eyebrow" style="text-align:center; margin-bottom:1rem;">Starter Packages</div>
			<stripe-pricing-table
				pricing-table-id="prctbl_1RxysH2K0wLA8j3Go1ecWenh"
				publishable-key="pk_live_51QpDWI2K0wLA8j3GCC0CoY2cLmGl6dkKVpCfIzpZB1TXkUgGFIXDVtPjxqJ4s9jjejdG6SsbJLlbyGFHf7aUX1fm00xfAjoCEb">
			</stripe-pricing-table>
		</div>
		
		<div>
			<div class="eyebrow" style="text-align:center; margin-bottom:1rem;">Professional Packages</div>
			<stripe-pricing-table
				pricing-table-id="prctbl_1RxxKK2K0wLA8j3G9h9tjOrs"
				publishable-key="pk_live_51QpDWI2K0wLA8j3GCC0CoY2cLmGl6dkKVpCfIzpZB1TXkUgGFIXDVtPjxqJ4s9jjejdG6SsbJLlbyGFHf7aUX1fm00xfAjoCEb">
			</stripe-pricing-table>
		</div>
	</div>

	<div id="backup-form" style="max-width:32rem;">
		<div class="eyebrow">Backup form</div>
		<p style="margin-top:0.25rem; color: rgba(10,10,10,0.8);">Choose a plan above, or leave your details and we'll invoice.</p>
		<form style="margin-top:1.5rem; display:grid; gap:1rem;" action="https://formsubmit.co/sales@thekpsgroup.com" method="POST">
			<input type="hidden" name="_subject" value="ModernBrands — Get Started Lead" />
			<input type="hidden" name="_next" value="/get-started#thanks" />
			<input type="hidden" name="_captcha" value="false" />
			<label style="display:block;">
				<span class="eyebrow">Name</span>
				<input required name="name" style="margin-top:0.25rem; width:100%; border:1px solid rgba(198,166,100,0.3); border-radius:0.375rem; padding:0.75rem 1rem; background:white;" />
			</label>
			<label style="display:block;">
				<span class="eyebrow">Email</span>
				<input required type="email" name="email" style="margin-top:0.25rem; width:100%; border:1px solid rgba(198,166,100,0.3); border-radius:0.375rem; padding:0.75rem 1rem; background:white;" />
			</label>
			<label style="display:block;">
				<span class="eyebrow">Phone</span>
				<input name="phone" style="margin-top:0.25rem; width:100%; border:1px solid rgba(198,166,100,0.3); border-radius:0.375rem; padding:0.75rem 1rem; background:white;" />
			</label>
			<label style="display:block;">
				<span class="eyebrow">Notes</span>
				<textarea name="notes" rows="4" style="margin-top:0.25rem; width:100%; border:1px solid rgba(198,166,100,0.3); border-radius:0.375rem; padding:0.75rem 1rem; background:white;"></textarea>
			</label>
			<button class="btn" style="width:fit-content;" type="submit">Submit</button>
		</form>
		<div id="thanks" style="margin-top:1.5rem; font-size:0.9rem; color: rgba(10,10,10,0.7);">Thanks — we'll get back to you shortly.</div>
	</div>
</section>
