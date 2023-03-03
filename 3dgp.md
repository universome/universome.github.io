---
layout: page
published: false
title: "3D generation on ImageNet"
conference: ICLR 2023 (Oral)
favicon_url: /assets/favicon.ico
disable_seo: false
og:
  description: "3D generation on ImageNet"
  url: "https://snap-research.github.io/3dgp"
meta_tags:
  - property: "og:video"
    content: "https://universome.github.io/assets/projects/3dgp/videos/teaser.mp4"
authors:
    - {name: "Ivan Skorokhodov", link: "https://universome.github.io", affiliations: [2], org: 1}
    - {name: "Aliaksandr Siarohin", link: "https://aliaksandrsiarohin.github.io/aliaksandr-siarohin-website/", affiliations: [1], org: 0}
    - {name: "Yinghao Xu", link: "https://justimyhxu.github.io/", affiliations: [3], org: 2}
    - {name: "Jian Ren", link: "https://alanspike.github.io/", affiliations: [1], org: 0}
    - {name: "Hsin-Ying Lee", link: "http://hsinyinglee.com/", affiliations: [1], org: 0}
    - {name: "Peter Wonka", link: "https://peterwonka.net", affiliations: [2], org: 1}
    - {name: "Sergey Tulyakov", link: "http://www.stulyakov.com", affiliations: [1], org: 0}
common_organizations:
    - name: Snap Inc.
      link: https://research.snap.com
      logo: /assets/images/snap-logo-small-padding.png
    - name: KAUST
      link: https://kaust.edu.sa
      logo: /assets/images/kaust-logo.png
    - name: CUHK
      link: https://www.cuhk.edu.hk
      logo: /assets/images/cuhk-logo.png
informal_summary:
    - >-
        Existing 3D-from-2D generators are typically designed for well-curated single-category datasets, where all the objects have (approximately) the same scale, 3D location and orientation, and the camera always points to the center of the scene. This makes them inapplicable to diverse, in-the-wild datasets of non-alignable scenes rendered from arbitrary camera poses. In this work, we develop a <i>3D generator with Generic Priors (3DGP)</i>: a 3D synthesis framework with more general assumptions about the training data, and show that it scales to very challenging datasets, like ImageNet. Our model is based on three new ideas. First, we incorporate an <i>inaccurate</i> off-the-shelf depth estimator into 3D GAN training via a special depth adaptation module to handle the imprecision. Then, we create a flexible camera model and a regularization strategy for it to learn its distribution parameters during training. Finally, we extend the recent ideas of transferring knowledge from pretrained classifiers into GANs for patch-wise trained models by employing a simple distillation-based technique on top of the discriminator. It achieves more stable training than the existing methods and speeds up the convergence by at least 40%. We explore our model on four datasets: SDIP Dogs 256x256, SDIP Elephants 256x256, LSUN Horses 256x256, and ImageNet 256x256 and demonstrate that 3DGP outperforms the recent state-of-the-art in terms of both texture and geometry quality.

        <div class="youtube-video-container"><iframe src="https://www.youtube.com/embed/2FwPhFnE1Wo"></iframe></div>

# <div style="text-align: center; margin-top: 20px;">
#     <video style="width: 100%; height: auto;" id="teaser-video" preload="auto" src="/assets/projects/epigraf/videos/teaser.mp4" type="video/mp4" controls loop></video>
# </div>

data_host: &data_host "/assets/projects/3dgp"

links:
    pdf: https://snap-research.github.io/3dgp/3dgp-paper.pdf
    github: https://github.com/snap-research/3dgp
    arxiv: https://arxiv.org/abs/2303.01416
    data: https://disk.yandex.ru/d/kxAG_2Y3xZjfyA
    supp: https://u2wjb9xxz9q.github.io/
    # openreview: https://openreview.net/forum?id=U2WjB9xxZ9q

sections:
    - title: "Architecture overview"
      paragraphs:
        - type: image
          host: *data_host
          url: /assets/projects/3dgp/images/architecture.png
          caption: >-
            Left: our tri-plane-based generator. To synthesize an image, we first sample camera parameters from a prior distribution and pass them to the camera generator. This gives the posterior camera parameters, used to render an image and its depth map. The depth adaptor mitigates the distribution gap between the rendered and the predicted depth. Right: our discriminator receives a 4-channel color-depth pair as an input. A fake sample consists of the RGB image and its (adapted) depth map. A real sample consists of a real image and its estimated depth. Our two-headed discriminator predicts adversarial scores and image features for knowledge distillation.
    - title: "Samples on ImageNet 256x256"
      paragraphs: [{type: video, autoplay_attr: autoplay, host: *data_host, url: /videos/ours/imagenet-more.mp4}]
    - title: Comparison with contemporary 3D generators
      paragraphs:
        - type: videos
          video_width: 384
          autoplay_attr: autoplay
          host: *data_host
          videos:
            - {url: /videos/comparison/eg3d.mp4, caption: '<a href="https://nvlabs.github.io/eg3d/" target="_blank">EG3D</a>'}
            - {url: /videos/comparison/epigraf.mp4, caption: '<a href="https://universome.github.io/epigraf" target="_blank">EpiGRAF</a>'}
            - {url: /videos/comparison/3dgp.mp4, caption: "3DGP (ours)"}
    - title: Depth Adaptor ablation on SDIP Dogs 256x256
      paragraphs:
        - type: videos
          video_width: 384
          autoplay_attr: autoplay
          host: *data_host
          videos:
            - {url: /videos/ablation/p1.mp4, caption: "No Depth Adaptator: FID<sub>2k</sub> = 12.2"}
            - {url: /videos/ablation/p05.mp4, caption: "Adapting depth with 50% probability: FID<sub>2k</sub> = 9.25"}
            - {url: /videos/ablation/p0.mp4, caption: "Adapting depth with 100% probability: FID<sub>2k</sub> = 8.13"}
          caption: We use Depth Adaptor to adapt the depth rendered from generated 3D scenes before passing them into Discriminator. Otherwise, Generator will be forced to fit prediction artifacts of the LeReS depth estimator. And Depth Adaptor prevents its errors from leaking into the learned geometry. This helps to improve the image quality — for more more complex datasets (e.g., ImageNet), training diverges if we train without the depth adaptor.
    - title: "Geometry comparison"
      paragraphs: [{type: image, host: *data_host, url: /assets/projects/3dgp/images/geometry.png}]

    - title: "Convergence speed with knowledge distillation"
      paragraphs:
        - type: image
          host: *data_host
          url: /assets/projects/3dgp/images/distillation.png
          max_width: 640
          caption: >-
            <b>Convergence of StyleGAN2 (in terms FID vs the number of real images seen by Discriminator) on ImageNet 128x128 for different knowledge distillation strategies.</b> We develop a general and efficient strategy of transferring external knowledge into the GAN model based on knowledge distillation. It consists in forcing the discriminator to predict features of a pre-trained ResNet50 model. This technique has just 1% of computational overhead compared to standard training, but allows to improve FID for both 2D and 3D generators by at least 40%. Compared to knowledge transfer through initialization (i.e., <a href="https://arxiv.org/abs/2111.01007" target="_blank">ProjectedGANs</a>), it does not restrict the discriminator's architecture, and we can combine it with patch-wise training or using depth maps as the 4-th input channel.

    - title: Quantitative results
      paragraphs:
        - type: table
          max_width: 1000
          content: >-
                <table>
                <thead>
                <tr><th><span>Model</span></th><th><span>Synthesis type</span></th><th><span>FID ↓</span></th><th><span>Inception Score ↑</span></th><th><span>Training cost (A100 GPU days) ↓</span></th></tr>
                </thead>
                <tbody>
                    <tr><td><a href="https://arxiv.org/abs/1809.11096" target="_blank">BigGAN</a></td><td><span>2D</span></td><td><span>8.7</span></td><td><span>142.3</span></td><td><span>60</span></td></tr>
                    <tr><td><a href="https://sites.google.com/view/stylegan-xl/" target="_blank">StyleGAN-XL</a></td><td><span>2D</span></td><td><span>2.3</span></td><td><span>265.1</span></td><td><span>163+</span></td></tr>
                    <tr><td><a href="https://arxiv.org/abs/2105.05233" target="_blank">ADM</a></td><td><span>2D</span></td><td><span>4.59</span></td><td><span>186.7</span></td><td><span>458</span></td></tr>
                    <tr><td><a href="https://nvlabs.github.io/eg3d/" target="_blank">EG3D</a></td><td><span>3D-aware</span></td><td><span>26.7</span></td><td><span>61.4</span></td><td><span>18.7</span></td></tr>
                    <tr><td><span>+ wide camera distribution</span></td><td><span>3D-aware</span></td><td><span>25.6</span></td><td><span>57.3</span></td><td><span>18.7</span></td></tr>
                    <tr><td><a href="https://genforce.github.io/volumegan/" target="_blank">VolumeGAN</a></td><td><span>3D-aware</span></td><td><span>77.68</span></td><td><span>19.56</span></td><td><span>15.17</span></td></tr>
                    <tr><td><a href="https://jiataogu.me/style_nerf/" target="_blank">StyleNeRF</a></td><td><span>3D-aware</span></td><td><span>56.64</span></td><td><span>21.80</span></td><td><span>20.55</span></td></tr>
                    <tr><td><a href="https://sites.google.com/view/stylegan-xl/" target="_blank">StyleGAN-XL</a> + <a href="https://shihmengli.github.io/3D-Photo-Inpainting/" target="_blank">3DPhoto</a></td><td><span>3D-aware</span></td><td><span>116.9</span></td><td><span>9.47</span></td><td><span>165+</span></td></tr>
                    <tr><td><a href="https://universome.github.io/epigraf" target="_blank">EpiGRAF</a></td><td><span>3D</span></td><td><span>47.56</span></td><td><span>26.68</span></td><td><span>15.9</span></td></tr>
                    <tr><td><span>+ wide camera distribution</span></td><td><span>3D</span></td><td><span>58.17</span></td><td><span>20.36</span></td><td><span>15.9</span></td></tr>
                    <tr><td><span>3DGP </span><span style="color:#0070C0">(ours)</span></td><td><span>3D</span></td><td><span>19.71</span></td><td><span>124.8</span></td><td><span>28</span></td></tr>
                </tbody>
                </table>

    - title: Limitations and failure cases
      paragraphs:
        - type: text
          content: >-
            <b> 😭 Background sticking and no 360° generation.</b> Since we use . The contemporary <a href="https://kylesargent.github.io/vq3d" target="_blank">VQ3D</a> generator used <a href="https://arxiv.org/abs/2111.12077" target="_blank">Mip-NeRF-360</a>'s coordinates contraction to fit an onbounded scene into tri-planes' \([-1, 1]^3\) cube. We believe it could be help with background sticking. For 360 generation, one needs supervision for side-views, which could be obtained via <a href="https://dreamfusion3d.github.io/" target="_blank">DreamFusion</a>-like guidance by a general-purpose text-to-image 2D diffusion model.
        - type: text
          content: >-
            <b> 😬 Lower visual quality compared to 2D generators.</b> Despite providing a more reasonable representation of the underlining scene, 3D generators still have a lower visual quality compared to 2D generators. Closing this gap is essential for a wide adaptation of 3D generators.
        - type: text
          content: >-
            <b> 😢 Skewed geometry because of the relative depth.</b> At the time of project development, there were no general-purpose metric depth estimators available, that's why we used <a href="https://github.com/aim-uofa/AdelaiDepth/" target="_blank">LeReS</a>, which is a relative depth estimator. This does not give good guidance since the recovered 3D shapes from a relative depth estimator are skewed. But recently, there started to appear general-purpose metric depth estimators (e.g., <a href="https://arxiv.org/abs/2302.12288" target="_blank">ZoeDepth</a>).
        - type: text
          content: >-
            <b> 😟 Camera generator does not learn fine-grained camera control on complex datasets.</b> While our camera generator is conditioned on the class label, and, in theory, it should be able to perform fine-grained control over the class focal length distributions (which is natural since landscape panoramas and close-up view of a coffee mug typically have different focal lengths), we observed that it is doing this only for controlled experiments (e.g., on <a href="https://github.com/universome/megascans-rendering" target="_blank">Megascans Food</a> \(128^2\)). For ImageNet, we didn't observed that our Generator does not learn any fine-grained control over FoV. We attribute this problem to the implicit bias of the generator to produce large-FoV images due to tri-planes parametrization. Tri-planes define a limited volume box in space, and close-up renderings with large focal length would utilize fewer tri-plane features, hence using less generator’s capacity. This is why 3DGP attempts to perform modeling with larger field-of-view values.
        - type: image
          host: *data_host
          max_width: 640
          url: /assets/projects/3dgp/images/focal-length-dist.png
          caption: >-
            Focal length distribution on ImageNet \(256^2\) learned by our Camera Generator. The blue solid line is the mean values, while lower/upper curves are 0.05 and 0.95 quantiles, respectively.
        - type: text
          content: >-
            <b> 😱 Flat geometry for some classes.</b> Despite our best efforts to enable rich geometry guidance, we noticed that our tri-plane-based generator is still inherently biased towards producing flat shapes (which was also noticed by <a href="https://nvlabs.github.io/eg3d/" target="_blank">EG3D</a> and <a href="https://xiaoming-zhao.github.io/projects/gmpi/" target="_blank">GMPI</a>).
        # - type: video
        #   host: *data_host
        #   url: /videos/random-samples.mp4
        #   additional_classes: "small-video"
        #   ignore_border: true
        #   autoplay_attr: autoplay
        #   caption: <i>Random</i> samples from 3DGP for class indices 1-8, seed=0.
        - type: text
          content: >-
            <b> 😕 On ImageNet, we have low intra-category diversity (i.e., notorious GAN mode collapse).</b> We observed that our Generator is biased towards producing low intra-class diversity. We attribute this to two reasons: 1) generating 3D is considerably more difficult than generating 2D and thus requires more capacity, but our Generator is relatively small even compared to 2D ImageNet generators; 2) it is more difficult for Discriminator to detect a mode collapse when the same shape is rendered from different camera positions and thus creating the effect of multiple different images. At the same time, we didn't observe any mode collapse issue on other datasets.
        # - type: video
        #   host: *data_host
        #   url: /videos/mode-collapse.mp4
        #   additional_classes: "small-video"
        #   ignore_border: true
        #   autoplay_attr: autoplay
        #   caption: Samples for the same class and different latent noise vectors.
    # - title: Contemporary works
    #   paragraphs:
    #     - type: text
    #       content: >-
    #         <ul>
    #             <li><a href="https://kylesargent.github.io/vq3d" target="_blank">VQ3D: Learning a 3D-Aware Generative Model on ImageNet</a> by Sargent et al.</li>
    #         </ul>
bibtex: >-
    @inproceedings{3dgp,
        title={3D generation on ImageNet},
        author={Ivan Skorokhodov and Aliaksandr Siarohin and Yinghao Xu and Jian Ren and Hsin-Ying Lee and Peter Wonka and Sergey Tulyakov},
        booktitle={International Conference on Learning Representations},
        year={2023},
        url={https://openreview.net/forum?id=U2WjB9xxZ9q}
    }
#     @article{vq3d,
#         title={VQ3D: Learning a 3D-Aware Generative Model on ImageNet},
#         author={Sargent, Kyle and Koh, Jing Yu and Zhang, Han and Chang, Huiwen and Herrmann, Charles and Srinivasan, Pratul and Wu, Jiajun and Sun, Deqing},
#         journal={arXiv preprint arXiv:2302.06833},
#         year={2023}
#     }
---
