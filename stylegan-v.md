---
layout: page
published: true
disable_seo: false
title: "StyleGAN-V: A Continuous Video Generator with the Price, Image Quality and Perks of StyleGAN2"
conference: ~
favicon_url: /assets/favicon.ico
og:
  description: "StyleGAN-V: A Continuous Video Generator with the Price, Image Quality and Perks of StyleGAN2"
  url: "https://universome.github.io/stylegan-v"
# meta_tags:
#   - property: "og:video"
#     content: "/assets/images/ysda-av-1-edit-small.jpg"
authors:
    - name: Ivan Skorokhodov
      link: https://universome.github.io
      affiliations: [1]
    - name: Sergey Tulyakov
      link: http://www.stulyakov.com
      affiliations: [2]
    - name: Mohamed Elhoseiny
      link: http://www.mohamed-elhoseiny.com
      affiliations: [1]
common_organizations:
    - name: KAUST
      link: https://kaust.edu.sa
      logo: /assets/images/kaust-logo.png
    - name: Snap Inc.
      link: https://research.snap.com
      logo: /assets/images/snap-logo-no-padding.png
      logo_height: 40
informal_summary:
    - >-
        Videos show continuous events, yet most — if not all — video synthesis frameworks treat them discretely in time. In this work, we think of videos of what they should be — time-continuous signals, and extend the paradigm of neural representations to build a continuous-time video generator. For this, we first design continuous motion representations through the lens of positional embeddings. Then, we explore the question of training on very sparse videos and demonstrate that a good generator can be learned by using as few as 2 frames per clip. After that, we rethink the traditional image and video discriminators pair and propose to use a single hypernetwork-based one. This decreases the training cost and provides richer learning signal to the generator, making it possible to train directly on 1024x1024 videos for the first time. We build our model on top of StyleGAN2 and it is just 10% more expensive to train at the same resolution while achieving almost the same image quality. Moreover, our latent space features similar properties, enabling spatial manipulations that our method can propagate in time. We can generate arbitrarily long videos at arbitrary high frame rate, while prior work struggles to generate even 64 frames at a fixed rate. Our model achieves state-of-the-art results on four modern 256x256 video synthesis benchmarks and one 1024x1024 resolution one.

# <div style="text-align: center; margin-top: 50px;">
        #     <video width=1000 id="teaser-video" style="border: 1px solid black; border-radius: 1px;" preload="auto" src="/assets/projects/alis/alis.mp4" type="video/mp4" controls loop></video>
        # </div>
links:
    pdf: https://kaust-cair.s3.amazonaws.com/stylegan-v/stylegan-v-paper.pdf
    arxiv_inactive: true
    #github: https://github.com/universome/stylegan-v
    github_soon: true

data_host: &data_host https://kaust-cair.s3.amazonaws.com/stylegan-v
# data_host: &data_host ""
sections:
    - title: ""
      paragraphs:
        - type: warning
          content: "Note: please, use the latest version of Chrome/Chromium or Safari to watch the videos (alternatively, you can download a video and watch it offline). Some of the videos can be displayed incorrectly in other web browsers (e.g., Firefox)."
    - title: <b>Random videos</b> on FaceForensics 256x256
      paragraphs:
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours_ffs_256_unstable.mp4, caption: StyleGAN-V (ours)}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-sg2_ffs_256_unstable.mp4, caption: MoCoGAN + StyleGAN2 backbone}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-hd_ffs_256_unstable.mp4, caption: MoCoGAN-HD}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/vgpt_ffs_256_unstable.mp4, caption: VideoGPT}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/digan_ffs_256_unstable.mp4, caption: DIGAN}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours-lstm-1_ffs_256_unstable.mp4, caption: StyleGAN-V without our positional embeddings with continuous LSTM codes with δ<sup>z</sup> = 1 instead}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours-lstm-16_ffs_256_unstable.mp4, caption: StyleGAN-V without our positional embeddings with continuous LSTM codes with δ<sup>z</sup> = 16 instead}
    - title: <b>Random videos</b> on SkyTimelapse 256x256
      paragraphs:
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours_sky_timelapse_256.mp4, caption: StyleGAN-V (ours)}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-sg2_sky_timelapse_256.mp4, caption: MoCoGAN + StyleGAN2 backbone}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-hd_sky_timelapse_256.mp4, caption: MoCoGAN-HD}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/vgpt_sky_timelapse_256.mp4, caption: VideoGPT}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/digan_sky_timelapse_256.mp4, caption: DIGAN}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours-lstm-1_sky_timelapse_256.mp4, caption: StyleGAN-V without our positional embeddings with continuous LSTM codes with δ<sup>z</sup> = 1 instead}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours-lstm-16_sky_timelapse_256.mp4, caption: StyleGAN-V without our positional embeddings with continuous LSTM codes with δ<sup>z</sup> = 16 instead}
    - title: <b>Random videos</b> on RainbowJelly 256x256
      paragraphs:
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours_rainbow_jelly_256.mp4, caption: StyleGAN-V (ours)}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-sg2_rainbow_jelly_256.mp4, caption: MoCoGAN + StyleGAN2 backbone}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-hd_rainbow_jelly_256.mp4, caption: MoCoGAN-HD}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/vgpt_rainbow_jelly_256.mp4, caption: VideoGPT}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/digan_rainbow_jelly_256.mp4, caption: DIGAN}
    - title: <b>Random videos</b> on UCF101 256x256
      paragraphs:
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/ours_ucf101_256.mp4, caption: StyleGAN-V (ours)}
        # - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-sg2_ucf101_256.mp4, caption: MoCoGAN + StyleGAN2 backbone}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/mocogan-hd_ucf101_256.mp4, caption: MoCoGAN-HD}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/vgpt_ucf101_256.mp4, caption: VideoGPT}
        - {width: 1200, type: video, host: *data_host, url: /videos/videos-long/digan_ucf101_256.mp4, caption: DIGAN}
    - title: <b>Random videos</b> on MEAD 1024x1024
      paragraphs:
        - type: videos
          video_width: 256
          host: *data_host
          urls:
            - /videos/videos-long/mocogan-hd_mead_front_1024/00.mp4
            - /videos/videos-long/mocogan-hd_mead_front_1024/01.mp4
            - /videos/videos-long/mocogan-hd_mead_front_1024/02.mp4
            - /videos/videos-long/mocogan-hd_mead_front_1024/03.mp4
          caption: MoCoGAN-HD
        - type: videos
          video_width: 256
          host: *data_host
          urls:
            - /videos/videos-long/ours_mead_front_1024/00.mp4
            - /videos/videos-long/ours_mead_front_1024/01.mp4
            - /videos/videos-long/ours_mead_front_1024/02.mp4
            - /videos/videos-long/ours_mead_front_1024/03.mp4
          caption: StyleGAN-V (ours)
    - title: Projecting off-the-shelf images into our model.
      paragraphs:
        - type: text
          content: "<b>Note:</b> FaceForensics is much more limited dataset than FFHQ (only ~700 identites!), that's why our projection results are inferior to those of StyleGAN2"
        - type: videos
          host: *data_host
          video_width: 512
          urls:
            - /videos/videos-edit/adele-2_projected.mp4
            - /videos/videos-edit/bengio_projected.mp4
            - /videos/videos-edit/lawrence_projected.mp4
            - /videos/videos-edit/brad-pitt_projected.mp4
            - /videos/videos-edit/hopkins_projected.mp4
            - /videos/videos-edit/rihanna_projected.mp4
    - title: Video editing using CLIP
      paragraphs:
        - type: videos
          video_width: 256
          host: *data_host
          urls:
            - /videos/videos-edit/adele_old.mp4
            - /videos/videos-edit/bengio_makeup.mp4
            - /videos/videos-edit/bengio_tshirt.mp4
          caption: "Text prompts used (left-to-right, top-to-bottom): <b>&laquo;An old person&raquo;</b>, <b>&laquo;A person with makeup&raquo;</b>, <b>&laquo;A person with a purple t-shirt&raquo;</b>"
        - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/beard_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;A person with a beard&raquo;</b>"}
        - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/blue_eyes_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;A person with blue eyes&raquo;</b>"}
        - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/old_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;An old person&raquo;</b>"}
        # - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/mustaches_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;A person with mustaches&raquo;</b>"}
        - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/bright_sun_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;Bright sun&raquo;</b>"}
        - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/cloudy_day_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;Very cloudy day&raquo;</b>"}
        - {width: 512, type: video, host: *data_host, url: /videos/videos-edit/aurora_gen_w.mp4, caption: "Left: original video. Right: edited with <b>&laquo;Aurora&raquo;</b>"}
    - title: Increasing the frame rate by x5 on <b>random samples</b> on FaceForensics 256x256
      paragraphs:
        - {width: 1200, type: video, host: *data_host, url: /videos/ours_ffs_256_unstable_fps_x5.mp4, caption: "Increasing the frame rate by x5"}
    - title: Content/motion decomposition
      paragraphs:
        - type: videos
          video_width: 512
          host: *data_host
          urls:
            - /videos/moco/ffs_256_unstable.mp4
            - /videos/moco/sky_timelapse_256.mp4
          caption: "Content/motion decomposition for FaceForensics 256x256 (left) and SkyTimelapse 256x256 (right). Each row is a different content code, while each column is a different set of motion codes. Note that our method captures temporal patterns not only in terms of motion, but also appearance changes, like time of day."
    - title: Real videos
      paragraphs:
        - {width: 1024, type: video, host: *data_host, url: /videos/rainbow_jelly_256.mp4, caption: "Real videos for RainbowJelly 256x256"}
        - {width: 1024, type: video, host: *data_host, url: /videos/mead_front_256.mp4, caption: "Real videos for MEAD 256x256. Note that heads have static positions"}
# bibtex: >-
#     @article{stylegan_v,
#         title={Adversarial Generation of Continuous Images},
#         author={Ivan Skorokhodov and Savva Ignatyev and Mohamed Elhoseiny},
#         journal={arXiv preprint arXiv:2011.12026},
#         year={2020}
#     }
#     @article{digan,
#         title={Image Generators with Conditionally-Independent Pixel Synthesis},
#         author={Anokhin, Ivan and Demochkin, Kirill and Khakhulin, Taras and Sterkin, Gleb and Lempitsky, Victor and Korzhenkov, Denis},
#         journal={arXiv preprint arXiv:2011.13775},
#         year={2020}
#     }
---
