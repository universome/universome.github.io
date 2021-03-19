---
title:  "Adversarial Generation of Continuous Images"
date: 24 Nov 2020
categories: jekyll update
arxiv_url: "https://arxiv.org/abs/2011.12026"
is_preprint: false
conference: CVPR 2021
image_url: "/assets/images/projects-thumbs/inr-gan.jpg"
code_url: "https://github.com/universome/inr-gan"
authors:
  - Ivan Skorokhodov
  - Savva Ignatyev
  - Mohamed Elhoseiny
abstract: >-
    In most existing learning systems, images are typically viewed as 2D pixel arrays. However, in another paradigm gaining popularity, a 2D image is represented as an implicit neural representation (INR) -- an MLP that predicts an RGB pixel value given its (x,y) coordinate. In this paper, we propose two novel architectural techniques for building INR-based image decoders: factorized multiplicative modulation and multi-scale INRs, and use them to build a state-of-the-art continuous image GAN. Previous attempts to adapt INRs for image generation were limited to MNIST-like datasets and do not scale to complex real-world data. Our proposed architectural design improves the performance of continuous image generators by x6-40 times and reaches FID scores of 6.27 on LSUN bedroom 256x256 and 16.32 on FFHQ 1024x1024, greatly reducing the gap between continuous image GANs and pixel-based ones. To the best of our knowledge, these are the highest reported scores for an image generator, that consists entirely of fully-connected layers. Apart from that, we explore several exciting properties of INR-based decoders, like out-of-the-box superresolution, meaningful image-space interpolation, accelerated inference of low-resolution images, an ability to extrapolate outside of image boundaries and strong geometric prior. The source code is available at this https URL
short_description: >-
    We built a GAN model that generates images in the <i>implicit neural representation</i> (INR) form. An INR is a function F(c) which takes coordinates c = (x, y) as input and predicts a pixel value v = (r, g, b). In this way, our generator is a hypernetwork which generates parameters for F(c). We proposed two techniques to scale such a model to real-world datasets: factorized multiplicative modulation and multi-scale INRs. We achieved decent generative quality on LSUN bedrooms 256x256 and FFHQ 1024x1024 and showed a lot of interesting properties of INR-based decoders.
---
