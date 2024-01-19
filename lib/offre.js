
const blocks = document.querySelectorAll('.offre-controle-flex-block');
blocks.forEach((block) => {
  block.addEventListener('mouseover', (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    const newblocks =document.querySelectorAll('.offre-controle-flex-block');
    newblocks.forEach((newblock) => {
      if (newblock.style.transform !== "scale(1.2)") newblock.style.transform="scale(0.8)";
    })
  })
  block.addEventListener('mouseout', (e) => {
    const newblocks =document.querySelectorAll('.offre-controle-flex-block');
    newblocks.forEach((newblock) => {
        newblock.style.transform="scale(1)"
    })
  })
})
