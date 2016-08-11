export default function appendNewRef(id, text, container) {
    var popper = document.createElement('div');
    popper.id = id;
    popper.classList.add('ref');
    popper.textContent = text || 'reference';
    (container || jasmineWrapper).appendChild(popper);
    return popper;
}
