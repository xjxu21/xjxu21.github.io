---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, this is Xiaojie Xu(徐 啸捷). I am currently an M.Phil. student in Artificial Intelligence at [The Hong Kong University of Science and Technology, Guangzhou](https://www.hkust-gz.edu.cn/about/) advised by [Prof. Ying-Cong Chen](https://www.yingcong.me/). Prior, I received a Bachelor's degree in Automation from [University of Science and Technology of China](https://en.ustc.edu.cn/About.htm), advised by [Prof. Ligang Liu](http://staff.ustc.edu.cn/~lgliu/). 

My current research focuses on **Visual Generative Models** and **Multimodal Large Language Models(MLLMs)** for content understanding and generation. Representative works include:

- **Visual Generative Models**: [POSTA](https://arxiv.org/abs/2503.14908)(visually appealing movie poster generation from text, CVPR 25), [BEV to Street View](https://arxiv.org/abs/2409.01014)(street-view images generation from bird's-eye view map, ICRA 24), [VBench++](https://arxiv.org/abs/2411.13503)(benchmarking video generative models, T-PAMI 25)
- **Multimodal Large Language Models** : [PreGenie](https://arxiv.org/abs/2505.21660)(MLLMs for text-image document understanding and presentation generation, EMNLP 25), [Orchestrating Audio](https://arxiv.org/abs/2503.10719)(MLLMs for long-video understanding and audio generation, EMNLP 25)

Feel free to contact me for discussion and collaboration🤠.

# 📝 Recent Publications 

\* indicates equal contributions. For a complete list of publications, please refer to my [Google Scholar](https://scholar.google.com/citations?user=XTRyjAcAAAAJ) profile.

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">T-PAMI 2025</div><img src='images/vbench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VBench++: Comprehensive and Versatile Benchmark Suite for Video Generative Models](https://arxiv.org/abs/2411.13503)

Ziqi Huang\*, Fan Zhang\*, **<u>Xiaojie Xu</u>**, Yinan He, Jiashuo Yu, Ziyue Dong, Qianli Ma, Nattapol Chanpaisit, Chenyang Si, Yuming Jiang, Yaohui Wang, Xinyuan Chen, Ying-Cong Chen, Limin Wang, Dahua Lin, Yu Qiao, Ziwei Liu

IEEE Transactions on Pattern Analysis and Machine Intelligence(T-PAMI), [Github](https://github.com/Vchitect/VBench) stars > 1k

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025, Findings</div><img src='images/pregenie_2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PreGenie: An Agentic Framework for High-quality Visual Presentation Generation](https://arxiv.org/abs/2505.21660)

**<u>Xiaojie Xu</u>**, Xinli Xu, Sirui Chen, Haoyu Chen, Fan Zhang, Ying-Cong Chen

Conference on Empirical Methods in Natural Language Processing(EMNLP), Findings

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025, Main</div><img src='images/audio.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Long-Video Audio Synthesis with Multi-Agent Collaboration](https://arxiv.org/abs/2503.10719)

Yehang Zhang\*, Xinli Xu\*, **<u>Xiaojie Xu</u>****\***, Doudou Zhang, Li Liu, Ying-Cong Chen

Conference on Empirical Methods in Natural Language Processing(EMNLP), Main

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/posta.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[POSTA: A Go-to Framework for Customized Artistic Poster Generation](https://haoyuchen.com/POSTA)

Haoyu Chen\*, **<u>Xiaojie Xu</u>****\***, Wenbo Li, Jingjing Ren, Tian Ye, Songhua Liu, Ying-Cong Chen, Lei Zhu, Xinchao Wang

Conference on Computer Vision and Pattern Recognition(CVPR)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2024</div><img src='images/bev7.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[From Bird’s-Eye to Street View: Crafting Diverse and Condition-Aligned Images with Latent Diffusion Model](https://ieeexplore.ieee.org/document/10611235)

**<u>Xiaojie Xu</u>**, Tianshuo Xu, Fulong Ma and Ying-Cong Chen

International Conference on Robotics and Automation(ICRA)

</div>
</div>
