import { initFederation } from '@angular-architects/native-federation';

// Initialize federation with remotes pointing to their manifest files
initFederation({
  mfe1: 'http://localhost:4201/remoteEntry.json',
  mfe2: 'http://localhost:4202/remoteEntry.json',
})
  .then(_ => {
    console.log('Federation initialized successfully');
    return import('./bootstrap');
  })
  .catch(err => {
    console.error('Federation init failed:', err);
    // Continue anyway - might work if remotes are configured elsewhere
    return import('./bootstrap');
  })
  .catch(err => console.error('Bootstrap error:', err));
