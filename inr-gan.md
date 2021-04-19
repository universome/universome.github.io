---
layout: page
published: false
title: Adversarial Generation of Continuous Images
favicon_url: /assets/projects/class-norm/favicon.ico
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
        Typically, an image decoder is built the following way.
    - >-
        With FMM and multi-scaling applied together, the model architecture "diverged" into the one which is <i>very</i> similar to StyleGAN2 (which is quite unfortunate, because originally we thought to be developing something truly novel). Basically, our INR-GAN \(\equiv\) StyleGAN2, <i>but with</i>:
        <ul>
            <li>coordinate embeddings concatenated to hidden representations</li>
            <li>3x3 convolutions replaced with 1x1 ones</li>
            <li>upfirdn2n/bilinear upsampling replaced with the nearest neigbhour one</li>
            <li>weight modulation-demodulation replaced with FMM</li>
        </ul>
links:
    arxiv: https://arxiv.org/abs/2011.12026
    github: https://github.com/universome/inr-gan
sections:
    - title: "(Very) related work"
      paragraphs:
        - type: image
          url: /assets/projects/inr-gan/naive-inr-gan.jpg
          max_width: 400
        - type: text
          content: >-
                If you get interested in our model, you should also check <a href="https://arxiv.org/abs/2011.13775" target="_blank">CIPS paper</a>, which was a parallel CVPR submission by Samsung AI Moscow & Skoltech. The authors achieved higher scores, but their architecture is ~5 times bigger/slower (since they didn't use multi-scaling).
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
