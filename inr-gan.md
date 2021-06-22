---
layout: page
published: true
title: Adversarial Generation of Continuous Images
favicon_url: /assets/projects/class-norm/favicon.ico
og:
  description: INR-based GAN for 2D image generation
  image: "https://universome.github.io/assets/projects/inr-gan/images/conv-vs-inr.jpg"
  url: "https://universome.github.io/inr-gan"
authors:
    - name: Ivan Skorokhodov
      link: https://universome.github.io
      affiliations: [1]
    - name: Savva Ignatyev
      link: https://github.com/SavvaI
      affiliations: [2]
    - name: Mohamed Elhoseiny
      link: http://www.mohamed-elhoseiny.com
      affiliations: [1]
common_organizations:
    - name: KAUST
      link: https://kaust.edu.sa
      logo: /assets/images/kaust-logo.png
    - name: Skoltech
      link: https://skoltech.ru
      logo: /assets/images/skoltech-logo.png
informal_summary:
    - >-
        In most existing learning systems, images are typically viewed as 2D pixel arrays. However, in another paradigm gaining popularity, a 2D image is represented as an implicit neural representation (INR) — an MLP that predicts an RGB pixel value given its \((x,y)\) coordinate. In this paper, we propose two novel architectural techniques for building INR-based image decoders: factorized multiplicative modulation and multi-scale INRs, and use them to build a state-of-the-art continuous image GAN. Previous attempts to adapt INRs for image generation were limited to MNIST-like datasets and do not scale to complex real-world data. Our proposed INR-GAN architecture improves the performance of continuous image generators by several times, greatly reducing the gap between continuous image GANs and pixel-based ones. Apart from that, we explore several exciting properties of the INR-based decoders, like out-of-the-box superresolution, meaningful image-space interpolation, accelerated inference of low-resolution images, an ability to extrapolate outside of image boundaries, and strong geometric prior.
links:
    arxiv: https://arxiv.org/abs/2011.12026
    github: https://github.com/universome/inr-gan
sections:
    - title: Main idea
      paragraphs:
        - type: image
          url: /assets/projects/inr-gan/conv-vs-inr.jpg
          max_width: 600
          caption: INR-based decoders (right) are structured differently from the convolutional ones (left). They are composed of a hypernetwork (a neural network which generates parameters for another neural network) and an MLP which produces an RGB value from the pixel coordinate. In our work, we introduced two techniques to make this parametrization much more efficient.
    - title: Properties
      paragraphs:
        - type: text
          content: >-
            The key feature of the INR-based decoders lies in its properties. In our paper, we explore several of them: image extrapolation, superresolution, meaningful interpolation, strong geometric prior and others.
        - type: image
          url: /assets/projects/inr-gan/extrapolation.jpg
          max_width: 900
          caption: >-
            Our INR-based decoder is capable to extrapolate outside of image boundaries without being trained to do so. Originally we thought that we were the first to show this, after the submission we found that in the <a href="https://hubert0527.github.io/COCO-GAN">COCO-GAN</a> paper authors demonstrated the same property.
        - type: image
          url: /assets/projects/inr-gan/interpolation.jpg
          max_width: 600
          caption: >-
            INR-GAN has meaningful interpolations in the image space (i.e. in the parameter space of the INRs)
        - type: image
          url: /assets/projects/inr-gan/superresolution.jpg
          max_width: 600
          caption: >-
            INR-based decoder can perform superresolution out-of-the-box by evaluating on a denser coordinate grid.
        - type: image
          url: /assets/projects/inr-gan/geometric-prior.jpg
          max_width: 400
          caption: >-
            We fitted a linear model to predict face keypoints from latent codes and observed that for INR-GAN, achieves much better performance than for StyleGAN2. This shows that the keypoints (and hence other geometric information) is encoded in a less entangled form in INR-GAN.
    - title: Related work
      paragraphs:
        - type: text
          content: >-
            <a href="https://arxiv.org/abs/2011.13775" target="_blank">CIPS</a> is a contemporary work which also builds a large-scale INR-based GAN for image generation.
bibtex: >-
    @article{inr_gan,
        title={Adversarial Generation of Continuous Images},
        author={Ivan Skorokhodov and Savva Ignatyev and Mohamed Elhoseiny},
        journal={arXiv preprint arXiv:2011.12026},
        year={2020}
    }
    @article{cips,
        title={Image Generators with Conditionally-Independent Pixel Synthesis},
        author={Anokhin, Ivan and Demochkin, Kirill and Khakhulin, Taras and Sterkin, Gleb and Lempitsky, Victor and Korzhenkov, Denis},
        journal={arXiv preprint arXiv:2011.13775},
        year={2020}
    }
---
