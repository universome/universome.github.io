---
title:  "Aligning Latent and Image Spaces to Connect the Unconnectable"
date: 12 April 2021
categories: gans, inrs, infinite images
arxiv_url: "https://arxiv.org/todo"
project_url: "https://universome.github.io/alis"
is_preprint: true
conference: ~
image_url: "/assets/images/projects-thumbs/alis.jpg"
code_url: "https://github.com/universome/alis"
authors:
  - Ivan Skorokhodov
  - Grigory Sotnikov
  - Mohamed Elhoseiny
short_description: >-
    We proposed an idea of positioning GAN's latent codes on the coordinates plane. This means that each latent code, when sampled, is getting associated with an \((x,y)\)-position of the 2D image plane and our generator computes a color of a pixel from the interpolation of the neighboring latent codes (instead of just a single global one). This allows us 1) to generate images of infinite size (by generating infinitely many latent codes and positioning them on the grid); and 2) connecting unrelated frames into a single, arbitrarily large panorama.
---
