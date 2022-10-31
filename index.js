
let opAmtBtns = document.getElementsByClassName('btn-op');

for (const opAmtBtn of opAmtBtns) {
  const opInput = document.getElementById(opAmtBtn.dataset.for);

  opAmtBtn.addEventListener('click', function () {
    opInput.focus();
    if (this.dataset.op === 'minus') {
      if (opInput.value > 0) {
        opInput.value--;
      }
    } else if (this.dataset.op === 'plus') {
      opInput.value++;
    }

    opInput.dispatchEvent(new Event('change'));
  });
}

const backbagQuantityElem = document.getElementById('backbag-quantity');
const shoesQuantityElem = document.getElementById('shoes-quantity');

const backbagPriceElem = document.getElementById('backbag-price');
const shoesPriceElem = document.getElementById('shoes-price');

const totalElem = document.getElementById('total');

function calcTotal(event) {
  totalElem.textContent = (backbagQuantityElem.value || 0) * 54.99 + (shoesQuantityElem.value || 0) * 74.99 + 19;
}

backbagQuantityElem.addEventListener('change', calcTotal);
shoesQuantityElem.addEventListener('change', calcTotal);

