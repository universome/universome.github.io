---
title:  "Adversarial Generation of Continuous Images"
date: 24 Nov 2020
categories: gans, inrs
arxiv_url: "https://arxiv.org/abs/2011.12026"
is_preprint: false
conference: CVPR 2021
image_url: "/assets/images/projects-thumbs/inr-gan.jpg"
code_url: "https://github.com/universome/inr-gan"
project_url: "https://universome.github.io/inr-gan"
authors:
  - Ivan Skorokhodov
  - Savva Ignatyev
  - Mohamed Elhoseiny
short_description: >-
    We built a GAN model that generates images in the <i>implicit neural representation</i> (INR) form. An INR is a function \(F(c)\) which takes coordinates \(c = (x, y)\) as input and predicts a pixel value \(v = (r, g, b)\). In this way, our generator is a hypernetwork that generates parameters for \(F(c)\). We proposed two techniques to scale such a model to real-world datasets: factorized multiplicative modulation (FMM) and multi-scale INRs. We achieved decent (for INR-based models) generative quality on LSUN Churches \(256^2\), LSUN Bedrooms \(256^2\), and FFHQ \(1024^2\) and showed a lot of interesting properties of INR-based decoders. At the end of the day, our approach turned out to be very similar to StyleGAN2 with 1x1 convolutions, coordinate embeddings, and nearest neighbor upsampling.
---
