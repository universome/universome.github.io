---
layout: page
published: true
title: "EpiGRAF: Rethinking training of 3D GANs"
conference: NeurIPS 2022
favicon_url: /assets/favicon.ico
og:
  description: "EpiGRAF: Rethinking training of 3D GANs"
  url: "https://universome.github.io/epigraf"
meta_tags:
  - property: "og:video"
    content: "https://universome.github.io/assets/projects/epigraf/videos/teaser.mp4"
authors:
    - name: Ivan Skorokhodov
      link: https://universome.github.io
      affiliations: [1]
    - name: Sergey Tulyakov
      link: http://www.stulyakov.com
      affiliations: [2]
    - name: Yiqun Wang
      link: https://sites.google.com/view/yiqun-wang/home
      affiliations: [1]
    - name: Peter Wonka
      link: https://peterwonka.net
      affiliations: [1]
common_organizations:
    - name: KAUST
      link: https://kaust.edu.sa
      logo: /assets/images/kaust-logo.png
    - name: Snap Inc.
      link: https://research.snap.com
      logo: /assets/images/snap-logo-small-padding.png
informal_summary:
    - >-
        A very recent trend in generative modeling is building 3D-aware generators from 2D image collections. To induce the 3D bias, such models typically rely on volumetric rendering, which is expensive to employ at high resolutions. During the past months, there appeared 10+ works (e.g., StyleNeRF, CIPS-3D, StyleSDF, EG3D, MVC-GAN, GIRAFFE-HD, VolumeGAN, etc.) that address this scaling issue by training a separate 2D decoder to upsample a low-resolution image (or a feature tensor) produced from a pure 3D generator.  But this solution comes at a cost: not only does it break multi-view consistency (i.e. shape and texture change when the camera moves), but it also learns the geometry in a low fidelity. In this work, we show that it is possible to obtain a high-resolution 3D generator with SotA image quality by following a completely different route of simply training the model patch-wise. We revisit and improve this optimization scheme in two ways. First, we design a location- and scale-aware discriminator to work on patches of different proportions and spatial positions. Second, we modify the patch sampling strategy based on an annealed beta distribution to stabilize training and accelerate the convergence. The resulted model, named EpiGRAF, is an efficient, high-resolution, pure 3D generator, and we test it on four datasets (two introduced in this work) at \(256^2\) and \(512^2\) resolutions. It obtains state-of-the-art image quality, high-fidelity geometry and trains \({\approx} 2.5 \times\) <i>faster</i> than the upsampler-based counterparts.

        <div style="text-align: center; margin-top: 20px;">
            <video style="width: 100%; height: auto;" id="teaser-video" preload="auto" src="/assets/projects/epigraf/videos/teaser.mp4" type="video/mp4" controls loop></video>
        </div>
links:
    pdf: /assets/projects/epigraf/epigraf.pdf
    github: https://github.com/universome/epigraf
    arxiv: https://arxiv.org/abs/2206.10535
    data: https://github.com/universome/megascans-rendering
data_host: &data_host "/assets/projects/epigraf"
sections:
    - title: "Architecture"
      paragraphs:
        - type: image
          url: /assets/projects/epigraf/images/architecture.png
          caption: "Our generator (left) is purely NeRF-based and uses the <a href='https://nvlabs.github.io/eg3d' target='_blank'>tri-plane backbone</a> with the StyleGAN2 decoder (but without the 2D upsampler). Our discriminator (right) is also based on StyleGAN2, but is modulated by the patch location and scale parameters. We use the patch-wise optimization for training with our proposed Beta scale sampling, which allows our model to converge $\times$2-3 faster than the upsampler-based architectures despite the generator modeling geometry in full resolution."
    - title: "Geometry visualization on FFHQ 512x512"
      paragraphs:
        - type: text
          content: "Our generator models the geometry in the full dataset resolution, which allows it to capture high-fidelity details. On those videos, one can observe that our generator models high-frequency details better: 1) our generator has more detailed hair structure; 2) eyes and mouth for EG3D are over-smoothed. It is recommended to view this videos in the full-screen mode: they have the resolution of ~2048x1024 not to omit high-frequency details."
        - {type: video, host: *data_host, url: /videos/shapes-comparison-2.mp4}
        - type: text
          content: "To produce those visualizations, we followed EG3D's pipeline: 1) generated MRC files of the density field at the 512x512x512 volume resolution; 2) visualized in ChimeraX via the <i>turn</i> and <i>record</i> commands. For EG3D, we set the marching cubes level parameter to 10 (as recommended by the repo). We used step=1 (the minimal value) for surface resolution and full lighting for the both methods. We used the provided original EG3D checkpoint, named <i>ffhq512-128.pkl</i>. Truncation was set to 0.7 for both generators."
    - title: "Geometry visualization on Megascans"
      paragraphs:
        - type: image
          url: /assets/projects/epigraf/images/geometry.png
          caption: Our generator models the geometry in a full dataset resolution and is able to fit data where the global structure differ a lot between different objects.
    - title: "Curated samples on FFHQ"
      paragraphs:
        - {type: video, host: *data_host, url: /videos/ffhq.mp4, ignore_border: true}
    - title: "Random samples on Cats"
      paragraphs:
        - {type: video, host: *data_host, url: /videos/cats.mp4, ignore_border: true}
    - title: "Random samples on Megascans Plants"
      paragraphs:
        - {type: video, host: *data_host, url: /videos/plants.mp4, ignore_border: true}
    - title: "Random samples on Megascans Food"
      paragraphs:
        - {type: video, host: *data_host, url: /videos/food.mp4, ignore_border: true}
    - title: "Latent interpolations on Megascans Plants"
      paragraphs:
        - {type: video, host: *data_host, url: /videos/plants_interp.mp4, ignore_border: true}
    - title: "Latent interpolations on Megascans Food"
      paragraphs:
        - {type: video, host: *data_host, url: /videos/food_interp.mp4, ignore_border: true}
    - title: "Curated samples for background separation on FFHQ"
      paragraphs:
        - type: video
          host: *data_host
          video_width: 1024
          url: /videos/ffhq_bg.mp4
          ignore_border: true
        - type: text
          content: In contrast to upsampler-based models, our generator is purely NeRF-based, so it can directly incorporate the advancements from the NeRF literature. In this example, we simply copy-pasted the code from NeRF++ for background separation via the inverse sphere parametrization. For this experiment, we didn't use pose conditioning in the discriminator (which we use for FFHQ and Cats to avoid flat surfaces — otherwise we have the same issues as EG3D and GRAM) and found that when the background separation is enabled, it learns to produce non-flat surfaces on its own, i.e. without direct guidance from the discriminator.
bibtex: >-
    @inproceedings{epigraf,
        title={Epi{GRAF}: Rethinking training of 3D {GAN}s},
        author={Ivan Skorokhodov and Sergey Tulyakov and Yiqun Wang and Peter Wonka},
        booktitle={Advances in Neural Information Processing Systems},
        editor={Alice H. Oh and Alekh Agarwal and Danielle Belgrave and Kyunghyun Cho},
        year={2022},
        url={https://openreview.net/forum?id=TTM7iEFOTzJ}
    }
---
