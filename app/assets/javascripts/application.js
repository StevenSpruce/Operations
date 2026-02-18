//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Top-level import (must be at the very top of the file)
import MultiselectAutocomplete from '../components/multiselect-autocomplete/multiselect-autocomplete.js';

window.GOVUKPrototypeKit.documentReady(() => {
  const els = document.querySelectorAll('[data-module="multiselect-autocomplete"]');
  els.forEach(el => {
    const comp = new MultiselectAutocomplete(el);
    comp.init();
  });
});