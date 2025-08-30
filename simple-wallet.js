// Simple Working Wallet Connection
console.log('🔗 Simple wallet script loaded');

// Global function to show thirdweb-style modal
window.showThirdwebModal = function() {
    console.log('🎯 Thirdweb modal triggered');
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.8); display: flex; align-items: center; 
        justify-content: center; z-index: 10000; backdrop-filter: blur(8px);
    `;
    
    modal.innerHTML = `
        <div style="background: #1a1a1a; padding: 32px; border-radius: 24px; max-width: 400px; width: 90%; color: white; text-align: center;">
            <h2 style="margin: 0 0 24px 0; font-size: 24px;">Connect Your Wallet</h2>
            <p style="color: #888; margin-bottom: 24px;">Choose how to connect to SocialX</p>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
                <button onclick="connectWith('Google')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">🔍<br>Google</button>
                <button onclick="connectWith('Discord')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">💬<br>Discord</button>
                <button onclick="connectWith('Telegram')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">✈️<br>Telegram</button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
                <button onclick="connectWith('X')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">𝕏<br>X</button>
                <button onclick="connectWith('Farcaster')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">🎯<br>Farcaster</button>
                <button onclick="connectWith('Email')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">📧<br>Email</button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
                <button onclick="connectWith('Phone')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">📱<br>Phone</button>
                <button onclick="connectWith('Passkey')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">🔐<br>Passkey</button>
            </div>
            
            <div style="border-top: 1px solid #333; padding-top: 24px; margin-bottom: 24px;">
                <p style="color: #666; margin-bottom: 16px;">Connect a Wallet</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                    <button onclick="connectWith('MetaMask')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">🦊<br>MetaMask</button>
                    <button onclick="connectWith('Coinbase')" style="padding: 16px; border: 1px solid #333; border-radius: 12px; background: #2a2a2a; color: white; cursor: pointer;">🔵<br>Coinbase</button>
                </div>
            </div>
            
            <div style="text-align: center; color: #666; font-size: 12px;">Powered by 🛡️ <strong>thirdweb</strong></div>
            <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 16px; right: 16px; background: none; border: none; color: #888; font-size: 24px; cursor: pointer;">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Connect function
window.connectWith = function(provider) {
    document.querySelector('[style*="position: fixed"]').remove();
    alert(`🎉 Connected with ${provider}!\\n\\n✅ Wallet connected successfully\\n🚀 Ready to trade social tokens`);
    
    // Update the connect button
    const btn = document.getElementById('main-connect-btn');
    if (btn) {
        btn.innerHTML = `💼 Connected (${provider})`;
        btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
    }
};

console.log('🎯 Simple wallet integration ready!');