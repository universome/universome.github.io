---
title:  "AC3D: Analyzing and Improving 3D Camera Control in Video Diffusion Transformers"
date: 27 November 2024
categories: video generation, camera control
arxiv_url: https://arxiv.org/abs/2411.18673
project_url: https://snap-research.github.io/ac3d/
is_preprint: false
conference: CVPR 2025
image_url: "/assets/images/projects-thumbs/ac3d.gif"
code_url: https://github.com/snap-research/ac3d
authors: ["Sherwin Bahmani", "Ivan Skorokhodov", "Guocheng Qian", "Aliaksandr Siarohin", "Willi Menapace", "Andrea Tagliasacchi", "David B. Lindell", "Sergey Tulyakov"]
short_description: >-
  Many works have recently integrated 3D camera control into foundational text-to-video models, but the resulting camera control is often imprecise, and video generation quality suffers. In this work, we analyze camera motion from the first principles perspective, obtaining insights that enable precise 3D camera manipulation without compromising synthesis quality. First, we show that camera motion is an inherently low-frequency signal, which motivated us to apply pose conditioning only in the beginning of the diffusion trajectory. Next, we found that a pre-trained diffusion model implicitly builds coherent camera representations in the initial layers. By providing the camera information to only these layers, we improve the training convergence and final quality. Finally, we collect a dataset with still cameras but moving scenes to mitiate the static bias of existing camera-control datasets.
---
