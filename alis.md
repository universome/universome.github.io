---
layout: page
published: true
title: Aligning Latent and Image Spaces to Connect the Unconnectable
favicon_url: /assets/projects/class-norm/favicon.ico
load_splidejs: true
project:
    authors:
        - {name: Ivan Skorokhodov, link: https://universome.github.io, affiliations: [1]}
        - {name: Grigorii Sotnikov, link: https://github.com/gsotnikov, affiliations: [2]}
        - {name: Mohamed Elhoseiny, link: http://www.mohamed-elhoseiny.com, affiliations: [1]}
    common_organizations:
        - {name: KAUST, link: https://kaust.edu.sa, logo: /assets/images/kaust-logo.png}
        - {name: Gradient, link: https://gradient.photo, logo: /assets/images/gradient-logo.svg}
    informal_summary:
        - >-
            We develop a method to generate infinite high-resolution images with diverse and complex content. It is based on a perfectly equivariant generator with synchronous interpolations in the image and latent spaces. Latent codes, when sampled, are positioned on the coordinate grid, and each pixel is computed from an interpolation of the nearby style codes. We modify the AdaIN mechanism to work in such a setup and train the generator in an adversarial setting to produce images positioned between any two latent vectors. At test time, this allows for generating complex and diverse infinite images and connecting any two unrelated scenes into a single arbitrarily large panorama. Apart from that, we introduce LHQ: a new dataset of 90k high-resolution nature landscapes. We test the approach on LHQ, LSUN Tower and LSUN Bridge and outperform the baselines by at least 4 times in terms of quality and diversity of the produced infinite images.
    links:
        arxiv: https://arxiv.org/todo
        github: https://github.com/universome/alis
    sections:
        - title: Live demo [infinite generation + resampling]
          paragraphs:
            - type: custom_include
              file: alis/carousel.html
            - type: text
              content: This is generation (without truncation tricks/clustered sampling) from a model trained on LHQ \(1024^2\) with FID = 7.8 (images are being resized to \(256^2\) for performance reasons).
        - title: The alignment of latent and image spaces
          paragraphs:
            - type: image
              url: /assets/projects/alis/images/alignment.jpg
              max_width: 800
            - type: text
              content: We position (global) latent codes \(w\) on the coordinates grid — the same grid where pixels are located. Each pixel value is computed from the interpolation of nearby latent codes via our Spatially-Aligned AdaIN (SA-AdaIN) mechanism, illustrated below.
            - type: image
              url: /assets/projects/alis/images/architecture.jpg
              max_width: 500
            - type: text
              content: Our generator is based on the StyleGAN2's one, but augmented with coordinates and the weight modulation-demodulation mechanism is replaced with Spatially-Aligned AdaIN — an AdaIN modification which uses interpolated latent codes to produce an output (illustrated below). At each iteration, we sample not only a latent code \(w_c\), which described the middle frame, but also its left/right neigbhours \(w_l\) and \(w_r\) which are positioned at distance \(d\) from \(w_c\). After that, we randomly select a frame (determined by random shift \(\delta\)) on this plane and render it. During the training we use only local relative coordinates — this allows to use any \(\delta \in (-\infty,+\infty)\) interval at test time without any loss in image quality.
            - type: images
              urls:
                - /assets/projects/alis/images/adain.jpg
                - /assets/projects/alis/images/sa-adain.jpg
              max_width: 400
              caption: Left — traditional AdaIN (but without shifting). Right — SA-AdaIN.
        - title: Shift equivariance of the generator
          paragraphs:
            - type: image
              url: /assets/projects/alis/images/equivariance.jpg
              max_width: 800
            - type: text
              content: Our generator is (<a href="https://richzhang.github.io/antialiased-cnns/" target="_blank">periodically</a>) shift equivariant by construction, which means that when you shift the input coordinates, the output image moves accordingly. It is achieved by building upon the <a href="https://arxiv.org/abs/2011.12026" target="_blank">recently proposed INR-GAN</a> model that generates pixels independently and does not require upsampling procedures during the forward pass. But instead of generating all pixels independently, we generate them patch-by-patch, like <a href="http://arxiv.org/abs/1904.00284" target="_blank">CocoGAN</a> does.
        - title: Connecting the unconnectable
          paragraphs:
            - type: image
              url: /assets/projects/alis/images/bedroom-sample-1.jpg
              max_width: 1200
              caption: A surprising result is that ALIS generator learns to connect scenes even for LSUN Bedroom — a dataset which does not have spatially invariant statistics, i.e. most of the images have walls on the left/right sides or close-by objects (visualized below) and which makes it very difficult to extrapolate in any direction.
            - type: image
              url: /assets/projects/alis/images/spatial-inv-problems.jpg
              max_width: 600
              caption: Illustrating the problems with LSUN Bedroom. It has walls and close-by objects that make it prevents its extrapolation in the left/right directions, since the dataset does not contain images that have close-by objects or walls in the <i>middle</i> of the frame.
        - title: Landscapes HQ dataset
          paragraphs:
            - type: text
            - content: >-
                We introduce a novel Landscapes HQ (LHQ) dataset, which consists of 90k high-resolution (>= 1024x1024) images of natural landscapes and outdoor scenery. We collected it from Unsplash and Flickr using a manually collected set of 400 search queries and preprocessed with Mask R-CNN to exclude images that contain objects. It is shipped with either Unsplash or Creative Commons licenses, which permit the use for research purposes.
            - type: image
              url: /assets/projects/alis/images/lhq-100.jpg
              max_width: 700
              caption: 100 random images from LHQ (downsized). The dataset will be released soon.
    teaser:
        type: custom
        content: >-
            <div style="text-align: center; margin-top: 50px;">
                <video width=1200 id="teaser-video" style="border: 1px solid black; border-radius: 1px;" preload="auto" src="/assets/projects/alis/alis.m4v#t=27" type="video/mp4" autoplay controls loop></video>
            </div>
        # <script>document.querySelector('#teaser-video').playbackRate = 1;</script
        # img_url: /assets/projects/alis/images/teaser.jpg
        caption: Our method can generate infinite images of diverse and complex scenes that transition naturally from one into another. It does so without any conditioning and trains without any supervision from a dataset of <i>unrelated square images</i>.
    bibtex: >-
        @inproceedings{
            alis,
            title={Aligning latent and image spaces to connect the unconnectable},
            author={Ivan Skorokhodov and Mohamed Elhoseiny},
            booktitle={International Conference on Learning Representations},
            year={2021},
            url={https://openreview.net/forum?id=7pgFL2Dkyyy}
        }
---
