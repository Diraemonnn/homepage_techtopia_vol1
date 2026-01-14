<template>
  <div style="padding: 20px; background: white;">
    <h2>Image Path Test</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
      <div style="border: 2px solid black; padding: 10px;">
        <h3>Logo Techtopia</h3>
        <img 
          src="/images/logo_techtopia.png" 
          alt="Logo Techtopia"
          style="max-width: 100%; height: auto;"
          @error="handleError"
          @load="handleLoad"
        />
        <p>Path: /images/logo_techtopia.png</p>
      </div>
      
      <div style="border: 2px solid black; padding: 10px;">
        <h3>Logo Undiksha</h3>
        <img 
          src="/images/logo_undiksha.png" 
          alt="Logo Undiksha"
          style="max-width: 100%; height: auto;"
          @error="handleError"
          @load="handleLoad"
        />
        <p>Path: /images/logo_undiksha.png</p>
      </div>
      
      <div style="border: 2px solid black; padding: 10px;">
        <h3>Logo HMJ</h3>
        <img 
          src="/images/logo_hmj.png" 
          alt="Logo HMJ"
          style="max-width: 100%; height: auto;"
          @error="handleError"
          @load="handleLoad"
        />
        <p>Path: /images/logo_hmj.png</p>
      </div>
      
      <div style="border: 2px solid black; padding: 10px;">
        <h3>Mascot</h3>
        <img 
          src="/images/mascot.png" 
          alt="Mascot"
          style="max-width: 100%; height: auto;"
          @error="handleError"
          @load="handleLoad"
        />
        <p>Path: /images/mascot.png</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleError = (event) => {
  console.error('Image failed to load:', event.target.src);
  event.target.style.border = '3px solid red';
};

const handleLoad = (event) => {
  console.log('Image loaded successfully:', event.target.src);
  event.target.style.border = '3px solid green';
};
</script>
