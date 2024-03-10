---
title:  "Snap Video: Scaled Spatiotemporal Transformers for Text-to-Video Synthesis"
date: 22 February 2024
categories: video generation
arxiv_url: "https://arxiv.org/abs/2402.14797"
project_url: "https://snap-research.github.io/snapvideo/"
is_preprint: false
conference: CVPR 2024
image_url: "/assets/images/projects-thumbs/snap-video-thumb.png"
code_url: null
authors: ["Willi Menapace", "Aliaksandr Siarohin", "Ivan Skorokhodov", "Ekaterina Deyneka", "Tsai-Shien Chen", "Anil Kag", "Yuwei Fang", "Aleksei Stoliar", "Elisa Ricci", "Jian Ren", "Sergey Tulyakov"]
short_description: >-
    Contemporary models for generating images show remarkable quality and versatility. Swayed by these advantages, the research community repurposes them to generate videos. Since video content is highly redundant, we argue that naively bringing advances of image models to the video generation domain reduces motion fidelity, visual quality and impairs scalability. In this work, we build Snap Video, a video-first model that systematically addresses these challenges. To do that, we first extend the EDM framework to take into account spatially and temporally redundant pixels and naturally support video generation. Second, we show that a U-Net - a workhorse behind image generation - scales poorly when generating videos, requiring significant computational overhead. Hence, we propose a new transformer-based architecture that trains 3.31 times faster than U-Nets (and is ~4.5 faster at inference). This allows us to efficiently train a text-to-video model with billions of parameters for the first time, reach state-of-the-art results on a number of benchmarks, and generate videos with substantially higher quality, temporal consistency, and motion complexity. The user studies showed that our model was favored by a large margin over the most recent methods.
---
