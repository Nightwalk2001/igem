export const zh = {
    home_tooltip: `回到首页`,
    copy_text: `复制`,
    copy_tooltip: `复制到剪贴板`,
    copy_notify: `Latex已复制到剪贴板`,
    download_tooltip: `点击下载文件`,
    video: `我们录制了一部教育视频，来向大众科普分子支架的概念以及让大家知晓我们队伍在做什么`,
    software: `这些是我们用过的软件和订购材料的公司`,

    home1: `
    <h>起因</h>
    <u>
    <l>
    在我们所生存的这个星球上，各种各样的物资，例如食物、能源、药物，都来源于对原材料的加工生产转换
</l>
<l>但是，由于原材料是有限的</l>
<l>因此提高物资的生产效率尤为关键</l>
</u>
`,
    home2: `
    <h>困境</h>
<u>
    <l>目前，利用来源于生物体的各种酶来生产物资是一种热门的方法</l>
<l>但是由于分子的布朗运动，在反应体系中，酶们往往散乱地分布着</l>
<l>因此在多酶反应步骤中,底物要精确地找到各步反应的酶需要消耗大量时间</l>
<l>进而影响了反应效率</l>
</u>
`,
    home3: `
    <h>想法</h>
<u>
<l>因此，我们决定利用circRNA作为媒介</l>
<l>将各位相关的酶连接到一起借此拉进各步反应的酶之间的距离</l>
<l>来提高反应效率</l>
</u>
`,
    home4: `
    <h>终局</h>
<u>
  <l>于是，这就是</l>
<l>CircRNA Assembly FacTory！</l>
</u>
`,

    subject_description: `Project Description`,
    abstract_description: `我们为何选择CRAFT作为我们的项目`,
    subject_design: `Project Design`,
    abstract_design: `我们如何设计我们的实验思路`,
    subject_contribution: `Contribution`,
    abstract_contribution: `我们提供给后来者的经验`,
    subject_safety: `Project Safety`,
    abstract_safety: `我们如何保证实验安全`,
    subject_proof: `Proof of Concept`,
    abstract_proof: `实验思路验证`,

    subject_parts: `Know Parts`,
    abstract_parts: `介绍我们的新元件以及对现有元件的改进`,

    subject_engineering: `Know Engineering`,
    abstract_engineering: `通过工程设计周期的一次迭代，在我们项目的一部分取得工程成功`,

    subject_overview: `HP Overview`,
    abstract_overview: `概述我们所做的工作`,
    subject_interga: `Integrated HP`,
    abstract_interga: `我们的团队如何回应我们的人类实践反思、研究和参与`,
    subject_collaborations: `Collaborations`,
    abstract_collaborations: `我们与SCU-CHINA, SCUT-China及SYSU-software展开的合作`,
    subject_partnership: `Partnership`,
    abstract_partnership: `我们全年与SYSU-Software就一系列与我们两个项目相关的共同目标进行的合作`,
    subject_implementation: `Implementation`,
    abstract_implementation: `我们将如何在现实世界中实施我们的项目`,
    subject_communication: `Communication`,
    abstract_communication: `开发和实施与合成生物学相关的科学交流`,
    subject_education: `Education`,
    abstract_education: `开发和实施与合成生物学相关的教育`,

    subject_members: `Members`,
    abstract_members: `我们的队伍成员`,
    subject_attributions: `Attributions`,
    abstract_attributions: `我们的团队成员做了哪些工作，其他人为我们的项目做了哪些工作`,

    description: `
    <title>摘要</title>
<line>人工多酶反应的效率往往由于酶与酶之间距离较大，导致反应速率低下。而在自然界中，细胞采用诸如形成多酶复合体的方式来提高多酶反应的效率。在iGEM 2021赛季中，我们以环状RNA为骨架，基于RNA和RNA结合蛋白之间的相互作用，整合我们在多酶反应中需要的酶，从而提高反应效率。我们在查阅文献中知道底物扩散对会影响多酶反应的效率，因此开发了一个多功能平台，该平台根据米曼方程、菲克定律等原理设计多酶反应，可以根据预期的产品输出，计算出所需的酶投入量。我们在实验部分选择了纤维素降解来验证我们设计的可行性，以上这些对基于circRNA骨架的多酶反应的探索，将有助于更多的生物过程的进一步研究。</line>
<title>背景知识</title>
<subtitle>环状RNA</subtitle>
<line>环状RNA（circRNA）是一种天然存在的非编码RNA，它含有一个共价封闭的环状结构，没有聚腺苷酸尾部。天然存在的环状RNA来源于外显子、内含子或二者的组合，在RNA剪接过程中产生。在细胞中，大多数环状RNA的丰度低于对应的线性RNA，但某些特定的环状RNA的表达量比其线性RNA更多。环状RNA可以作为miRNA的分子海绵，通过对miRNA的吸附，从而抑制miRNA的功能。除此之外，环状RNA还能参与目标基因的剪接、协助将基因表达为蛋白质，并与RNA结合蛋白（RBPs）相互作用[1]。</line>
<photo>{photo1}</photo>
<note>图1 环状RNA</note>
<subtitle>RNA结合蛋白</subtitle>
<line>RNA结合蛋白是一类含有特定基序、能与特定的RNA结合的蛋白。RNA结合蛋白广泛地参与了许多细胞内的生物过程，包括基因转录、翻译以及基因互作。虽然目前的研究表明，天然circRNA主要是作为miRNA的分子海绵来抑制miRNA的功能，但circRNA和RBP之间的相互作用也被认为是circRNA功能的重要组成部分[2]。</line>
<subtitle>人工多酶反应</subtitle>
<line>为了满足工业生产的需要，目前已经有许多人工多酶反应被设计出来。为了提高所需反应的效率，研究人员使用各种分子构件来设计酶结合的骨架，骨架材料包括DNA、RNA和蛋白质。在三种不同的骨架中，DNA分子较高的热稳定性、可预测的空间特性以及与互补链配对的可靠性，使得DNA分子成为了目前应用最为广泛的多酶反应骨架。</line>
<line>相比之下，传统的RNA骨架容易被RNase降解，也易被水解，这限制了RNA骨架的应用。然而，在我们的项目中，我们选用了共价闭合环状结构的circRNA，使得我们的多酶反应骨架能在工作环境中稳定存在，并且我们的骨架的环状结构也提高了骨架的空间可预测性。除了DNA骨架和RNA骨架之外，蛋白质骨架能够提供了多样化的分子结构，可以有效地共定位酶，但由于蛋白质骨架的空间预测性较低，限制了其在研究中的引用[3]。</line>
<title>我们的解决方案</title>
<line>我们构建了一个环状RNA的骨架，并使用接头DNA来连接RNA结合蛋白和我们的酶。当一个多酶反应的两个酶在环状RNA骨架上共定位时，第一个酶反应中产生的产物1将迅速扩散到第二个酶的附近，成为第二个酶产生产物2的底物。</line>
<photo>{photo2}</photo>
<note>图2 两个酶共定位在环状RNA骨架上</note>
<line>当我们将多种酶共定位在circRNA骨架上时，多酶反应中的产物可以迅速扩散，根据菲克定律，能够提高两步顺序反应的速度，提高产物的产量。</line>
<photo>{photo3}</photo>
<note>图3 多种酶共定位在环状RNA骨架上</note>
<line>为了实现我们的目标，我们分别在模型和实验部分中检验了我们构想的可行性。</line>
<line>在进行实验前，我们根据查阅的资料首先预测了不同反应条件下RBP与RNA的解离常数，从而在理论层面上初步预测了使用RBP进行多酶的效率。除此之外，为了让我们的项目能帮助到更多人，我们设计了一个能根据所需产品产量，以及多酶反应相关参数来预测所需酶量的<jump>平台</jump>，从而实现多酶反应的高效调控。</line>
<line>在实验验证部分中，选用了<link>分裂EGFP（split EGFP）=>/project/proof</link>作为验证元件，两个EGFP片段结合发出的荧光验证了我们设想的可行性。在接下来的实验中，我们选择了CenA和BglA两种酶用于<link>降解纤维素=>/project/design</link>，将纤维素分解为还原性的寡聚二糖，并选用了不同RBP测试我们想法的可行性，从而验证我们的设想。</line>
<title>应用价值</title>
<line>我们的circRNA支架可以有效缩短不同酶之间的距离，从而提高多酶反应的效率。正如我们在纤维素降解实验部分的结果，我们的circRNA组装工厂可以应用于工业生产，以增加新能源如乙醇的产量。此外，我们的circRNA支架也可能在临床治疗中发挥作用。在神经退行性疾病中（例如与β-淀粉样蛋白沉积有关的阿尔兹海默症），circRNA骨架可用于特定的药物运输或蛋白质降解。</line>
<title>COVID-19的影响</title>
<line>与去年一样，今年我们的iGEM项目也受到了COVID-19的影响。在2021年的五月到九月期间，疫情的反复让我们很难在实验室进行实验，同时由于实验方面的经验不足，我们在诸如环化RNA等步骤上也遇到了一定困难。但是在这期间，我们仍然通过模型完善和头脑风暴来探索改进我们的项目。我们每周与我们的团队成员线上或线下会面，并且每月与我们的指导老师会面，以确保我们的项目稳步推进。</line>
<subtitle>参考文献</subtitle>
<ref>[1] Du WW, Zhang C, Yang W, Yong T, Awan FM, Yang BB. Identifying and Characterizing circRNA-Protein Interaction. Theranostics. 2017;7(17):4183-4191. Published 2017 Sep 26. doi:10.7150/thno.21299</ref>
<ref>[2] Zang J, Lu D, Xu A. The interaction of circRNAs and RNA binding proteins: An important part of circRNA maintenance and function. J Neurosci Res. 2020;98(1):87-97. doi:10.1002/jnr.24356</ref>
<ref>[3] Tan YQ, Xue B, Yew WS. Genetically Encodable Scaffolds for Optimizing Enzyme Function. Molecules. 2021;26(5):1389. Published 2021 Mar 4. doi:10.3390/molecules26051389</ref>
    `,

    design: `
    <line>设计一个基于环状RNA的合成工厂不是一件容易的事情，但也并不复杂。这个简单的“工厂”只由两个部分组成，一个部分是环状RNA，另一个部分是特殊设计的融合蛋白。环状RNA就像是工厂的房子，为其中的生产机器（融合蛋白）提供安置的场所。具体来说，环状RNA上需要有几段特殊的序列，这些序列的二级结构可以在适宜条件下自发形成茎环，而这些茎环是RNA结合蛋白的结合位点，它们可以招募特定的RNA结合蛋白与之紧密结合。 与此一致的是，我们需要对正常的蛋白质进行改造。在不改变原有蛋白质功能域的前提下，连接一段RNA结合结构域，形成新的融合蛋白。改造后的蛋白质才能和我们的环状RNA支架上的茎环特异性结合，从而将生产机器（融合蛋白）固定在工厂（环状RNA）里面。总而言之，环状RNA和与之结合的融合蛋白构成了一个基于环状RNA合成工厂的基本组件（图1）。</line>
<photo>{photo1}</photo>
<note>图1：环状RNA支架的基本模式：环状RNA分子和融合蛋白</note>
<line>在我们的实验中，更多细节需要被考虑。比如，一个工厂能装多少生产机器？（一个环状RNA上面能设计多少个RNA结合蛋白的结合位点）。如何确定这些机器摆放的间隔？（环状RNA上两个相邻茎环的间距？）这个工厂在细胞内还是细胞外？（体内实验or体外实验）…… 这些要考虑的因素对我们实验的完善至关重要（图2）。</line>
<photo>{photo2}</photo>
<note>图2：理想的环状 RNA支架：一些需要被考虑的问题</note>
<line>依据我们的设计和上述值得思考的细节，我们的实验由两大部分组成——基于真核细胞的胞内实验，和以原核细胞胞浆（E.coli裂解液）为基质的胞外实验。两个部分的实验独立进行，相辅相成。在两个部分实验中，我们均审慎考虑环状RNA的设计和融合蛋白的选择。</line>
<title>1  基于真核细胞的胞内实验</title>
<subtitle>1.1 环状RNA</subtitle>
<line>环状RNA在真核生物中十分常见，这意味着真核细胞具有一定的RNA环化策略。由于环化的RNA缺少游离的3’和5’末端，所以相比于线性的RNA分子，环状RNA可以抵抗RNA外切酶的切割，具有更稳定的理化性质，这也是为什么我们选择环状RNA作为支架的原因。 </line>
<line>我们选择在体外进行一系列RNA相关的实验，包括RNA的体外转录和RNA体外环化。在体外得到环化的RNA后再将环状RNA通过脂质体2000试剂转入Hek293细胞系进行实验。相比于体内环化的策略，体外环化显然更加灵活，可以随时进行RNA的纯化和电泳分析。当然，体外环化也面临相对更高的RNA降解的风险，实验中必须谨慎防止RNase污染。</line>
<line>最初设计的环状RNA需要搭载RNA结合蛋白MS2和PP7。我们在两个茎环之间设计了15bp的间隔序列，根据经验，这样长度的间隔序列可以避免两个相邻融合蛋白之间相互干扰。在环化位点两端设计了10nt互补序列，期望通过互补配对拉近游离末端，方便环化。根据这些要求，我们使用RNA designer将需要的二级结构要求输入，得到返还的一级结构序列。我们通过RNA二级结构预测（图3），尽量避免额外茎环的形成。</line>
<photo>{photo3}</photo>
<note>图3：环状RNA二级结构预测：MS2和PP7的茎环已在图中展示</note>
<subtitle>1.2 融合蛋白</subtitle>
<line>我们选择split EGFP作为验证元件。与全长EGFP不同，split EGFP在特定位点（N端1-158AAs，C端159-238AAs）分裂。我们将这两段EGFP分别与两种RNA结合蛋白（MS2和pp7）融合表达。如果体系中不存在环状RNA支架，那么分裂EGFP不会发出荧光或者只能观察到微弱的本底荧光（图4左）。如果体系中存在环状RNA，而且RBP（MS2和pp7）可以和环状RNA上特定的结合位点相互结合，由于距离的靠近，两段EGFP片段会自组装形成全长EGFP并很快发出荧光（图4右）。</line>
<photo>{photo4}</photo>
<note>图4：分裂EGFP原理示意图（左：体系中缺少环状RNA；右：体系中存在环状RNA且两种RBP均能在环状RNA的特定位点上与之结合）</note>
<title>2  以原核细胞胞浆（E.coli裂解液）为基质的胞外实验</title>
<subtitle>2.1  环状RNA</subtitle>
<line>在原核生物中表达人工构建的环状RNA是一项困难的挑战。因为自然条件下，环状RNA只存在于真核生物中，原核细胞缺少RNA的环化策略。不可否认的是，这是一个非常有意思的想法，但是在我们的实验中，我们仍将沿用体外环化RNA的策略。将环化的RNA直接加入到原核细胞（E.coli）的超声裂解液中进行反应。这样做可以在一定程度上模拟在原核细胞内的情形，为未来原核细胞内的环化RNA构建提供理论依据。事实上，在大肠杆菌中构建环状RNA的方法已经出现，José-Antonio Daròs等人利用类病毒感染宿主茄子细胞后自我复制的原理，构建出不需要体内连接酶参与的依赖一类内含子的自我环化载体（原文链接：https://doi.org/10.1080/15476286.2021.1872962），为在大肠杆菌中开发circRNA通用平台奠定基础。如果时间允许，我们将尝试在大肠杆菌内构建circRNA。</line>
<photo>{photo5}</photo>
<note>图5.使用ELVd载体平台构建环状双链RNA的原理示意图</note>
<line>考虑到更长的环状RNA分子意味着更低的环化效率，我们将环状RNA的全长缩短至69bp，而且只保留了10个bp的间隔序列和必要的茎环序列。我们同样通过二级结构预测（图6），避免可能出现的额外茎环。</line>
<photo>{photo6}</photo>
<note>图6：缩短的环状RNA二级结构预测：MS2和PP7的茎环已在图中展示</note>
<subtitle>2.2 RNA结合蛋白（RBP）的选择</subtitle>
<line>我们选择了最常用的、大多是来自大肠杆菌或噬菌体衣壳蛋白的RBP，其大小在130aa之下，分子较小，不会干扰到与之融合的酶的功能；另外，其结合的适配体（aptamer）序列特征研究透彻，与适配体结合紧密，如PP7野生型解离常数仅为1nM:</line>
<photo>{photo7}</photo>
<line>除了最常用的MS2和PP7，我们还向基因合成公司订购并克隆了Qβ、λN、SLBP（来自HEK293）到pET28a载体，为circRNA支架上的适配体-RBP组合提供了丰富的工具箱。通过对不同亲和性、分子大小的适配体-RBP组合的选用，或许可以满足某些特定实验需求。如果时间允许，我们将提纯这些RBP并测试其与适配体的亲和性（解离常数），标准化RBP元件。</line>
<subtitle>2.2 融合蛋白</subtitle>
<line>在完成元件的基础的验证后，我们希望将RNA支架投入于实际应用。纤维素分解是多数代谢工程的第一个步骤。其产物葡萄糖可以作为各种微生物工业生产的原料，例如丙酮酸、乙醇、谷氨酸等多种氨基酸。因此，我们选择的两组酶分别是CenA和BglA。CenA是一种内切葡聚糖酶（英文：Endo-1,4-beta-glucanase A），它可以将水溶性纤维素分解为还原性的寡聚二糖。而BglA是一种6-磷酸-β-葡萄糖苷酶（英文：6-phospho-β-glucosidase），可以将CenA分解得到的寡聚二糖进一步分解为单体葡萄糖。也就是，CenA和BglA通过两步连续的酶促反应可以催化纤维素向葡萄糖的转变（图8）。</line>
<photo>{photo8}</photo>
<note>图8：CenA和BglA催化的两步连续反应：从纤维素到葡萄糖</note>
  <line>RNA支架可以拉近两个相邻反应的酶之间的距离，提高这两步连续反应的效率，推动反应的正向进行。在我们的实验中，RNA支架的作用在于将CenA和BglA两个酶相互拉近。因为两个酶之间的间距效率，纤维素经过CenA催化分解后的寡聚二糖很快就能进入第二个酶的活性中心，然后转化为葡萄糖。相比于这些酶游离存在的情形，环状RNA支架的存在改变了这些酶的组织方式（图7），从而加快多步连续的酶促反应的效率。</line>
<photo>{photo9}</photo>
<note>图9：环状RNA支架的存在拉近了两个酶之间的距离</note>
<line>我们将CenA和BglA分别与MS2和PP7融合表达于大肠杆菌BL21a株系。通过Western Blot检测蛋白表达量，然后超声裂解细菌。在得到的裂解液中加入预先构建好的环状RNA作为实验组，而不加入环状RNA的组别作为对照组。通过分光光度计检测终产物葡萄糖浓度的变化，以此验证环状RNA元件是否能起到提高反应效率的作用。</line>
    <line>环状RNA ciRS-7具有分子海绵的功能，其具有至少70个miR-7的结合位点，可以竞争性结合大量miR-7。受此启发，我们希望在我们的环状RNA上设计多个蛋白质结合的茎环，以此实现更高的结合效率（图8）。受限于对RNA体外环化技术的掌握程度，我们暂时无法实现这样的设想。我们希望将这样巧妙的设计留给未来的iGEMer们。如果将来的某一天这样的想法真的能成为现实，那将会为合成生物学创造更多的可能。</line>
<photo>{photo10}</photo>
<note>图10：在一个环状RNA分子上设计多个RBP结合位点，提高环状RNA的结合效率</note>
<subtitle>参考文献</subtitle>
<ref>[1] Breuer J , Rossbach O . Production and Purification of Artificial Circular RNA Sponges for Application in Molecular Biology and Medicine[J]. Methods and Protocols, 3(2).</ref>
<ref>[2] Demidov V V , Dokholyan N V , et al. Fast complementation of split fluorescent protein triggered by DNA hybridization[J]. Proc Natl Acad Sci U S A, 2006, 103(7):2052-2056.</ref>
<ref>[3] Wang, J., et al., 3dRNAscore: a distance and torsion angle dependent evaluation function of 3D RNA structures. Nucleic Acids Res, 2015. 43(10): p. e63.</ref>
<ref>[4] Waterhouse, A., Bertoni, M., Bienert, S., Studer, G., Tauriello, G., Gumienny, R., Heer, F.T., de Beer, T.A.P., Rempfer, C., Bordoli, L., Lepore, R., Schwede, T. SWISS-MODEL: homology modelling of protein structures and complexes. Nucleic Acids Res. 46(W1), W296-W303 (2018).</ref>
<ref>[5] Teresa, Cordero, et al. Large-scale Production of Recombinant RNAs on a Circular Scaffold Using a Viroid-derived System in Escherichia coli.[J]. Journal of Visualized Experiments Jove, 2018.</ref>
<ref>[6] Beltrán Ortolá, Cordero T , Hu X , et al. Intron-assisted, viroid-based production of insecticidal circular double-stranded RNA in Escherichia coli. 2020.</ref>
<ref>[7] Delebecque C J , AB Lindner, Silver P A , et al. Organization of Intracellular Reactions with Rationally Designed RNA Assemblies[J]. Science, 2011, 333(6041):470-4.</ref>
<ref>[8] Litke J L , Jaffrey S R . Highly efficient expression of circular RNA aptamers in cells using autocatalytic transcripts[J]. Nature Biotechnology.</ref>
    `,

    contribution: `
    <title>新的信息</title>
<line>我们通过同源建模上传了CenA（<open>BBa_K118023=>http://parts.igem.org/Part:BBa_K118023</open>）的三维结构，为这种广泛使用的酶提供了一个视觉印象。</line>
<line>我们在<open>BBa_K313010=>http://parts.igem.org/Part:BBa_K313010</open>部分（RNA噬菌体MS2的装载序列）上添加了一系列新文件。通过使用RNAfold，我们预测了含有MS2结合位点的环状RNA的二级结构。最佳二级结构和质心二级结构显示在零件页上。我们还利用xiaolab预测了circRNA的三维结构(https://xiao.lab.asu.edu/). 这可能为将来的iGEMers提供一个可用的circRNA序列。</line>
<line>我们在前人研究的基础上补充了MS2结合特定RNA结合位点的机制。我们提供了一篇利用裂解EGFP检测RNA分子上蛋白质相互作用的原始文章。</line>
<title>新元件</title>
<line>我们上传了元件<open>BBa_K3960001=>http://parts.igem.org/Part:BBa_K3960001 </open>至<open>BBa_K3960006 =>http://parts.igem.org/Part:BBa_K3960005 </open>，分别编码蛋白MS2、pp7、Qβ、SLBP和λN。这些基本部分是常用的RNA结合蛋白（RBPs），可能对未来的iGEMers有帮助。我们还将相应的RNA结合序列<open>BBa_K3960006=>http://parts.igem.org/Part:BBa_K3960006</open>上传至<open>BBa_K39600010=>http://parts.igem.org/Part:BBa_K3960010</open>，该序列显示RBPs结合的stemloop。（MS2和PP7的结合位点将在<open>BBa_K3960016=>http://parts.igem.org/Part:BBa_K3960016</open>和<open>BBa_K3960017=>http://parts.igem.org/Part:BBa_K3960017</open>部分中显示）</line>
<line>我们还分别将MS2与EGFP的N端（1-158AAs）和PP7与EGFP的C端（159-238AAs）融合（<open>BBa_K3960011=>http://parts.igem.org/Part:BBa_K3960011</open>和<open>BBa_K3960012=> http://parts.igem.org/Part:BBa_K3960012</open>）。两种重组蛋白都使用12AAs柔性连接子连接两个分离的功能域。这两个组成部分将有助于检测单个RNA支架上两个RBP（MS2和PP7）之间的相互作用。在元件<open>BBa_K3960014=>http://parts.igem.org/Part:BBa_K3960014</open>和<open>BBa_K3960015=>http://parts.igem.org/Part:BBa_K3960015</open>中，MS2和PP7分别由优化的CenA和BglA替代。在我们的体外实验中，这两个组成部分用于检测纤维素降解的效率。它们可能对含有MS2和PP7结合位点的其他RNA支架有用。</line>
<line><open>BBa_K3960016=>http://parts.igem.org/Part:BBa_K3960016</open>和<open>BBa_K3960017=>http://parts.igem.org/Part:BBa_K3960017</open>是两种不同circRNA支架的序列。circRNA支架1（BBa_K3960016）在两个RBP结合位点之间有15bp的内部序列，而circRNA支架2（BBa_K3960017）只有10bp的内部序列。这两种RNA序列都是通过体外转录合成的，而线性RNA都是通过5'单磷酸修饰的，这是循环的关键步骤。</line>
<title>困难排除</title>
<line>我们很高兴与未来的iGEMers分享我们构建circRNA的经验。有几个原因可能导致circRNA循环不成功。</line>
<line>首先，T4 RNA连接酶只识别5'单磷酸修饰的线性RNA。体外转录后，大多数线性RNA产物应该用5'单磷酸修饰，否则它们不会被T4 RNA连接酶环化。建议在体外转录前加入10倍GMP。GMP-启动的体外转录旨在获得主要为5'单磷酸化线性RNA转录本，可直接用于RNA循环。由于所有体外产生的T7聚合酶转录本均以三种鸟苷开始，因此随机产生的RNA子集将由GMP而非GTP启动。假设RNA聚合酶的活性中心以相同的亲和力接受GMP和GTP，则GMP过量10倍的转录会导致由90%单磷酸5′端组成的总转录物的混合物。此外，RNA 5'焦磷酸水解酶（RppH）可用于从三磷酸化RNA的5'端去除焦磷酸，以留下5'单磷酸RNA。此外，RNA可以先用CIP去除三磷酸盐，然后用激酶添加单一磷酸盐。含有这些5'单磷酸盐的片段可以通过T4 RNA连接酶连接。从生物技术公司订购含有5'单磷酸的寡线性RNA（小于80bp）也是一种值得考虑的方法。</line>
<line>此外，屏蔽末端的RNA二级结构可以抑制连接。在这些情况下，将DMSO添加到10%（v/v）可以增加结扎。</line>
<line>最后但并非最不重要的一点是，在实验过程中应注意RNA酶污染。RNase-Zap可用于防止污染。</line>
<subtitle>参考文献：</subtitle>
<ref>[1] Breuer J , Rossbach O . Production and Purification of Artificial Circular RNA Sponges for Application in Molecular Biology and Medicine[J]. Methods and Protocols, 3(2).</ref>
<ref>[2] Demidov V V , Dokholyan N V , et al. Fast complementation of split fluorescent protein triggered by DNA hybridization[J]. Proc Natl Acad Sci U S A, 2006, 103(7):2052-2056.</ref>
<ref>[3] Wang, J., et al., 3dRNAscore: a distance and torsion angle dependent evaluation function of 3D RNA structures. Nucleic Acids Res, 2015. 43(10): p. e63.</ref>
<ref>[4] Waterhouse, A., Bertoni, M., Bienert, S., Studer, G., Tauriello, G., Gumienny, R., Heer, F.T., de Beer, T.A.P., Rempfer, C., Bordoli, L., Lepore, R., Schwede, T. SWISS-MODEL: homology modelling of protein structures and complexes. Nucleic Acids Res. 46(W1), W296-W303 (2018).</ref>
    `,

    safety: `
    <title>概述</title>
<line>安全是当今合成生物学的首要问题。我们SYSU-CHINA的成员，严格遵守IGEM竞赛安全规则和中国相关规定。从设计阶段到实验阶段，安全和伦理问题一直在我们的项目中得到考虑。在我们了解风险后，Safety Form也由此得来。</line>
<title>实验室安全</title>
<line>我们非常重视实验室的安全。我们大多数人以前从未做过这些分子生物学实验操作，但在PI的指导下，我们分批掌握了实验操作。在进行电泳等危险实验时，每个成员的操作都经过了检查。</line>
<line>实验室的安全协议已经签署。</line>
<line>实验中使用的离心机、水浴、电泳槽等仪器均在人的监督下运行。</line>
<photo>{photo1}</photo>
<note>图1 实验区域</note>
<photo>{photo2}</photo>
<note>图2 我们在实验室里戴的手套和实验服。</note>
<line>在进行电泳时，更安全的Gene Green取代了EB作为核酸染料。</line>
<photo>{photo3}</photo>
<note>图3 染料</note>
<line>我们在通风柜中使用有毒试剂，如TEMED。</line>
<line>微生物和真核细胞操作在相应的超净台中进行。</line>
<photo>{photo4}</photo>
<note>图4 超净台</note>
<line>此外，我们在实验室中严格区分污染区和非污染区。</line>
<photo>{photo5}</photo>
<note>图5 污染区和非污染区的区分</note>
<title>项目设计安全</title>
<line>在项目设计中，我们使用了三种底盘生物，DH5α（E.coli）BL21（E.coli）和HEK293。我们从不把它们带出实验室，在丢弃细菌之前，我们用乙醇对其进行消毒。我们提交了实验中使用的<link>零件=>/parts/parts</link>。由于我们的安全意识，工程菌不会对人类和环境造成危害。</line>
<line>我们的项目可以为平衡食品资源和化学资源提供一个新的平台。为避免潜在危险，我们希望以这种方式生产的资源用于工业，并尽可能远离公众。工业生产必须在专业工厂进行。</line>
<title>疫情防控</title>
<line>鉴于新冠疫情，我们在开展项目时非常重视疫情预防和控制。我们积极响应学校的疫情防控措施。我们每个人都坚持每日健康申报，并经常对公共区域进行消毒。由于我们的共同努力，疫情没有因为我们的活动而恶化。</line>
    `,

    proof: `
  <title>概念验证</title>
<line>我们的目标是使用circRNA作为分子支架来共定位酶以加快它们的反应速率。 为了验证这个想法，我们打算进行spilt-EGFP，这是检测蛋白质-蛋白质相互作用的常用方法。如果我们能证明两个EGFP碎片可以通过RNA适配体和RNA结合蛋白（二者都与EGFP碎片相连接）之间的相互作用而被拽到一起，那么就足以证明我们的想法。spilt-EGFP原理如下：</line>
<photo>{photo1}</photo>
<note>图1.spilt-EGFP原理 </note>
<line>EGFP被分裂为：EGFP-N和EGFP-C。EGFP-N与EGFP-C分别与MS2和PP7融合。我们的circRNA支架上有MS2适配体和PP7适配体，它们具有10nt长度的间隔区。两个RBP结合后，它们融合的EGFP片段可以被拖得更近，从而形成一个完整的EGFP。然后我们可以执行FCM（流式细胞术）来检测亮度。</line>
<line>我们的实验包括四组，分别为阳性对照（仅转染可表达EGFP的质粒）、阴性对照（未转染）、实验组（转染可表达EGFP-N-MS2和EGFP-C-PP7的质粒以及circRNA scaffold 2)，假阳性组（转染能表达EGFP-N-MS2和EGFP-C-PP7但不表达circRNA的质粒）。结果如下：</line>
<photo>{photo2}</photo>
<note>图2.阳性对照组</note>
 <photo>{photo3}</photo>
<note>图3.阴性对照组 </note>
<photo>{photo4}</photo>
<note>图4.与circRNA支架一起共转染</note>
<photo>{photo5}</photo>
<note>图5.不与circRNA支架一起共转染 </note>
<line>结果表明，假阳性对照组的亮度介于阳性对照组和阴性对照组之间，符合我们的设计。实验组的亮度与阳性对照组一样低，表明没有误报影响我们的结果。总而言之，这种分裂的EGFP证明我们的circRNA支架确实有效。</line>
<line>根据以上结果，我们完成了对我们项目的想法验证。未来，我们将尝试将我们的产品应用到一些实际领域。</line>
    `,

    model_overview: `
    <first>正如在Project页面所描述的那样，我们的实验设计主要包含 circRNA 、融合蛋白、多酶反应三个要点。</first> 
<line>因此，circRNA的产率、与框架结合的融合蛋白的比例、多酶反应中酶距离对提高反应速率的影响都是验证框架的功效的重要因素。 </line>
<line>因此，我们的model主要针对以上几个方面展开预测与分析 </line>
    `,
    model_rna: `
    <title>circRNA的产率</title>
<line>我们构建circRNA主要分为两个大的步骤：转录及环化。根据我们所查阅到的文献，我们分别将两个步骤进一步细化，并将细化后的步骤利用公式进行量化，进一步得出衡量这两步反应效率的方式。</line>
<subtitle>转录：</subtitle>
<line>对于转录过程我们将其细化为起始和延伸两个步骤。</line>
<line>起始过程中，由于我们使用到的是噬菌体T7聚合酶Bacteriophage T7 RNA Polymerase（T7RNAP），其大多数启动子都由两个GTP启动的，而两个GTP的结合还伴随着构像的变化。Yiping Jia and Smita S. Patel指出GTP与ED复合物结合,发生了两次构象变化，在一个GTP结合时观察到一个快速可逆的步骤，并且在两个GTP分子结合后发生了一个缓慢的几乎不可逆的步骤。我们关心的是这个缓慢的不可逆的步骤，因为它更大程度影响着起始的速率。这个过程不符合双曲曲线，但它符合双GTP结合反应的解。</line>
{formula1}
<line>其中(E·D)n代表不同构象的聚合酶-启动子DNA复合物，其对GTP的依赖性适用于双曲方程：</line>
{formula2}
<line>因此我们可以知道：Kd=320μM;k+=7±0.2s-1;k-=0.13±0.1s-1;[1]</line>
<line>而延伸过程中，T7RNAP单次正确添加NTP的动力学参数如下[2]：</line>
<photo>{photo1}</photo>
<note>表1 T7RNAP单次正确添加NTP的动力学参数</note>
<line>转录延伸过程中单核苷酸掺入的动力学途径为</line>
{formula3}
<line>Kd是NTP的平衡解离常数，kpol是NMP掺入的最大速率常数。[3]</line>
<subtitle>环化：</subtitle>
<line>环化过程我们使用T4RNA连接酶2来催化。</line>
<line>T4RNA连接酶的反应有三步，在第一步中，Rnl2在没有核酸的情况下与ATP反应，形成Rnl2-(lysyl-Nζ)-AMP中间体并释放出热磷酸盐。在第2步中，Rnl2-AMP与缺失的双核酸结合，并将腺苷酸转移到5 ' - po4-端，形成腺苷化的缺失中间体。在步骤3中，Rnl2指挥攻击5 ' -磷酸酐键上的3 ' - OH，导致修复的3 ' - 5 '磷酸二酯和AMP的释放。</line>
<line>在我们所查阅到的文献中，作者使用了快速混合猝灭装置在毫秒级进行反应对中间产物和密封产物进行了量化，用MATLAB绘制其分布随时间的变化曲线，计算出第二步和第3步的速率得到下图。[4]</line>
<line>以此作为参考，根据我们环化的RNA序列可以相应知道第二步和第3步的速率。</line>
<photo>{photo2}</photo>
<note>图1 环化步骤中的速率参数</note>
<line>综合以上信息，理论上我们便可对我们得到circRNA的效率进行定量分析和预测。但由于时间及条件有限，我们未能实际对上述公式进行验证。</line>
<line>不过考虑到后续可能会有其它队伍对这一方面的研究感兴趣，我们依旧将我们所查阅到的信息整理后放到我们的页面上供后续可能用到的队伍参考。</line>
    `,
    model_protein: `
    <title>与框架结合的融合蛋白的比例</title>
<subtitle>1 解离常数</subtitle>
<line>在我们的设计中，RNA结合蛋白（RBP）与RNA的结合效率是决定结果好坏的一个重要因素，而结合效率的量化指标则是解离常数。</line>
<line>为了验证我们的想法的可行性，我们利用反应速率常数，结合荧光染料发光强度和RNA浓度的关系，得出不同RBP在不同反应条件下的解离常数，进而验证RBP的效果。</line>
<line>若将RBP与RNA的结合过程看作是一个可逆反应，则可假定反应方程为：（R：RNA；P：RNA结合蛋白；k：速率常数）</line>
{formula1}
<line>正向速率：（kon：正向速率常数；koff：逆向速率常数；Rf：游离的RNA浓度；Pf：游离的蛋白质浓度；Rt：总加入RNA浓度；Pt：总加入蛋白质浓度）</line>
{formula2}
<line>易得：</line>
{formula3}
<line>变换得：</line>
{formula4}
<line>代入上式得：</line>
{formula5}
<line>利用微积分得：</line>
{formula6}
<line>荧光强度和浓度之间存在如下关系：（荧光定量PCR）</line>
{formula7}
<line>将已知量带入积分根据实验数据即可求得解离常数：</line>
{formula8}
<line>不过由于实验时间有限，我们未能对上述公式展开实验验证，就此展示以提供给后续队伍参考。</line>
<subtitle>2 投入融合蛋白最适量预测</subtitle>
<line>在反应过程中，由于RNA结合蛋白与RNA存在不同的解离常数、不同酶催化反应的效率不同以及底物在不同的酶之间存在扩散。因此，投入体系中的融合蛋白的量的差异也会通过影响上述因素来间接影响终产物的产率。</line>
<line>为了在尽可能节约资源的情况下获得最佳的产率，我们决定对投入的融合蛋白的最适量进行分析与预测。并由此构建一个平台，通过输入一些相关的数据来直接获取最适的投入蛋白的量。</line>
<line>平台展示：</line>
{form}
<note>Michaelis constant、Maximum reaction rate、Equilibrium constant and rbp dissociation constant should be divided by ",", and the count should equal to channel</note>
<line>原理简介：</line>
<line>对于第一步反应来说，最理想的情况：在预计的反应时间t内，能将底物转化完全，即达到反应平衡，此时：（S0：初始底物的浓度；S1：经过第一个酶反应后底物的浓度；K1：第一步反应的平衡常数）</line>
{formula9}
<line>在这里，为了方便计算，我们做出假设：</line>
<line>假设1：反应过程中因底物浓度降低而造成的酶的催化反应速率改变忽略不计</line>
<line>由此易得：（n1：第一个酶的投入量；t：预计反应时间；Vm1：第一个酶在初始底物浓度下的反应速率）</line>
{formula10}
<line>对第二个酶，同理可得：（S2：经过第二个酶反应后底物的浓度；n2：第二个酶的投入量；Vm2：第二个酶在S2浓度下的反应速率；K2：第二步反应的平衡常数）</line>
{formula11}
<line>其中，Vm1和Vm2可由米氏方程计算得出</line>
{formula12}
<line>考虑到RBP和RNA不是100%结合的，存在解离平衡</line>
{formula13}
<line>因此，利用解离常数对酶投入量做出修正得：</line>
{formula14}
<line>除此之外，考虑到底物扩散的因素，（6）式中的S1实际上也与（3）式中的存在差别，因此，我们也根据菲克第一定律对浓度进行修正。具体的修正原理见模块3，此处不详述。</line>
<line>至此，将以上所有计算过程综合考虑，利用TypeScript(JavaScript的静态超集)进行计算，即可制作一个依赖输入即可直接输出所需酶最适投入量的平台。</line>
    `,
    model_enzyme: `
    <title>酶距离对提高反应速率的影响</title>
<subtitle>1 利用菲克第一定律的通用型计算</subtitle>
<line>当底物在不同的酶之间扩散的时候，由于底物浓度会随着距离发生变化，由此酶之间的距离会对反应速率造成影响。</line>
<line>菲克定律是阿道夫·菲克（Adolf Fick）于1855年提出的，是一种描述分子扩散过程中传质通量与浓度梯度之间关系的定律。</line>
<line>因此，为了验证我们通过减小酶之间的距离进而提高单位时间内产物产率的思路是否可行，我们利用菲克第一定律对酶之间距离与反应速率之间的关系进行了定量分析。</line>
<line>已知菲克第一定律为：</line>
{formula1}
<line>由上式结合我们的实验设计可得变式：（J’为常数；t：扩散时间；C0：扩散前浓度；C1：扩散后浓度；x：扩散距离）</line>
{formula2}
<line>移项得：</line>
{formula3}
<line>由此可得在扩散初浓度固定时不同扩散时间及距离下扩散后浓度的大小。由此可见，扩散时间相同时，酶间的距离越小（即扩散距离越小），到达下一步反应的酶的底物浓度就越高，从而越有利于产率的提高。</line>
<line>利用上式我们通过假定部分参数的值绘制了在初浓度相同时，不同酶间距下，扩散到第二个酶的底物浓度随时间的变化曲线。其中由左上到右下，各条曲线的酶间距依次扩大。</line>
{chart}
<line>从曲线图中我们很容易看出，当酶间距不断减小时，扩散相同时间，到达第二个酶的底物浓度明显增大。表明减小酶间距能有效提高底物在相同时间内在酶间的扩散效率。</line>
<subtitle>②针对纤维素水解过程的动态模拟</subtitle>
<line>在我们的实验设计中，我们打算采用纤维素水解过程中用到的两种酶（内切酶，葡萄糖苷酶），来对我们的思路进行实际的验证。</line>
<line>为了从理论上探究减小酶间距对反应效率的影响，我们受2011年Edinburgh队伍的启发，制作了一个纤维素水解过程的动态模拟。我们用两个点代表我们所使用的两种酶，而长条形图案代表纤维素。通过将酶间距设定在固定的某个值，来探究相同时间内纤维素水解速率与酶间距未限定情况下的差异。</line>
<line>结果如下：</line>
{canvas2D}
<line>从结果中我们可以看出，将酶间距限定在一定范围内时，纤维素水解的效率明显高于未限定距离时。同时，酶间距越小，水解效率越高。</line>
<line>不过同时我们也发现一个有意思的现象，当酶间距的限定值超过一定距离（如本模拟中设定的6）时，初始一段时间的催化效率基本与未限定距离相近，只有开始一段时间后效率才出现明显区别。表明在拉进酶间距时，控制适当的距离也是很重要的。必须使距离拉进到一定程度才能较为有效地提高效率。</line>
    `,
    model_structure: `
<title>空间结构预测</title>
<line>下面这些三维结构图都是使用three.js(最著名的JavaScript 3D库，使用WebGL渲染图形，可以说是3D领域的D3.js)绘制的，读取由结构预测得到的pdb文件，根据每一个原子的位置和化学键渲染出分子的三维模型。</line>
<subtitle>circRNA</subtitle>
<line>预测软件：RNAComposer</line>
{rna}
<line>我们在实验验证中所使用的circRNA包含两个蛋白结合序列（PBS）MS2和PP7，即理论上会形成两个茎环。我们将我们的circRNA序列投入RNAComposer内进行预测，得到上图所示结果。从图中可以明显看出两个茎环的结构。我们的茎环并未因三维的折叠而受到影响。至少在与融合蛋白的结合方面是可行的。</line>
<subtitle>融合蛋白：</subtitle>
{protein1}
<note>结构图1：cenA-MS2</note>
{protein2}
<note>结构图2：bglA-PP7</note>
<line>为了确认融合后的蛋白质能否呈现出理想的状态，我们请SYSU-Software（今年的项目中涉及蛋白质结构预测的队伍）来帮我们进行了我们的融合蛋白的结构预测。</line>
<line>我们预测了两个融合蛋白的结构，其中cenA是我们所用到的纤维素内切酶，bglA是一种葡萄糖苷酶。我们将它们分别与我们的RNA结合蛋白（RBP）融合以使其具有与我们的circRNA框架结合的能力。</line>
<line>从预测结果中可以看出，相互融合的两个蛋白可以明显区分开来，互不干扰，其中分子量较大的为cenA和bglA，分子量小的为MS2和PP7。与我们理想中的预测结果一致，进一步支持了我们的实验设计。</line>
<subtitle>参考文献</subtitle>
<ref>[1].\tJia, Y. and S.S. Patel, Kinetic Mechanism of GTP Binding and RNA Synthesis during Transcription Initiation by Bacteriophage T7 RNA Polymerase. The Journal of biological chemistry, 1997. 272(48): p. 30147-30153.</ref>
<ref>[2].\tTang, G., V.S. Anand and S.S. Patel, Fluorescence-Based Assay to Measure the Real-time Kinetics of Nucleotide Incorporation during Transcription Elongation. Journal of Molecular Biology, 2011. 405(3): p. 666-678.</ref>
<ref>[3].\tAnand, V.S. and S.S. Patel, Transient State Kinetics of Transcription Elongation by T7 RNA Polymerase. Journal of Biological Chemistry, 2006. 281(47): p. 35677-35685.</ref>
<ref>[4].\tChauleau, M. and S. Shuman, Kinetic mechanism of nick sealing by T4 RNA ligase 2 and effects of 3'-OH base mispairs and damaged base lesions. RNA, 2013. 19(12): p. 1840-1847.</ref>
    `,

    parts: `
    <title>更新的元件</title>
<line>基于现有的元件BBa_K118023（cenA的编码序列），我们通过coden优化来更新序列。CenA是一种内切葡聚糖酶（内切-1,4-β-葡聚糖酶A），可将水溶性纤维素分解为还原低聚双糖。这种酶在纤维素降解过程中起着关键作用。因此，我们更新了新的元件BBa_K3960013（cenA_编码序列优化）。编码优化可以提高表达率。</line>
<title>新元件</title>
<line>我们上传了元件BBa_K39601至BBa_K39606，分别编码蛋白MS2、pp7、Qβ、SLBP和λN。这些基本部分是常用的RNA结合蛋白（RBPs），可能对未来的iGEMers有帮助。我们还将相应的RNA结合序列BBa_K39606上传至BBa_K3960010，该序列显示RBPs结合的stemloop。（MS2和PP7的结合位点将在BBa_K3960016和BBa_K3960017部分中显示）</line>
<line>我们还分别将MS2与EGFP的N端（1-158AAs）和PP7与EGFP的C端（159-238AAs）融合（BBa_K3960011和BBa_K3960012）。两种重组蛋白都使用12AAs柔性连接子连接两个分离的功能域。这两个组成部分将有助于检测单个RNA支架上两个RBP（MS2和PP7）之间的相互作用。在元件BBa_K3960014和BBa_K3960015中，MS2和PP7分别由优化的CenA和BglA替代。在我们的体外实验中，这两个组成部分用于检测纤维素降解的效率。它们可能对含有MS2和PP7结合位点的其他RNA支架有用。</line>
<line>BBa_K3960016和BBa_K3960017是两种不同circRNA支架的序列。circRNA支架1（BBa_K3960016）在两个RBP结合位点之间有15bp的内部序列，而circRNA支架2（BBa_K3960017）只有10bp的内部序列。这两种RNA序列都是通过体外转录合成的，而线性RNA都是通过5'-一磷酸修饰的，这是循环的关键步骤。</line>
    `,

    engineering_overview: `
    <title>概述</title>
<line>我们的项目处处都遵循了设计-构建-测试-学习(DBTL)周期，这是iGEM的主要思想之一。由于新冠肺炎疫情进一步扩散，我们的工作受到了一定的限制。因此，我们需要投入更多的努力，进行更广泛的学习。花费了大约4个月的时间，我们逐步形成了项目的基本思想，然后用了5个月的时间来构建并验证它。我们的工作主要分为两部分，分别在干湿实验室进行。两个实验都是独立进行，相辅相成。我们工程的完整过程如下所述。</line>
<line>我们的灵感来源于某些类群的细菌的纤维素体。我们试图通过缩短几种水解酶之间的距离来提高纤维素酶的水解效率。我们选择了3种关键酶，包括内切1,4-β-D-葡聚糖酶(EG)、外切1,4-β-D-葡聚糖酶(CBH)和β-1,4-葡萄糖苷酶(BG)。<link>我们在干实验中模拟了上述过程。=>/model</link></line>
<line>环状RNA是相对稳定的，基于这个特性，我们以其为支架来构建纤维素酶反应体系。为了使酶固定在支架上，我们计划通过连接肽段将酶与RNA结合蛋白（RBP）融合表达。考虑到不同RBP的性能和解离常数（Kd）存在差异，我们选择了MS2和PP7作为我们的适配蛋白。如果纤维素酶系统能正常工作，我们计划把这个模型推广到其他酶促代谢途径。</line>
<line>我们计划分别在真核细胞和原核细胞中验证我们的系统。在真核生物系统中，分裂EGFP是分子生物学实验中常用的蛋白质，可以直观地显示蛋白质与RNA的互作。</line>
<line>在分裂EGFP实验成功的基础上，我们计划将纤维素酶系统转移到大肠杆菌中。由于酶和纤维素之间存在天然屏障（细胞膜），因此我们使用超声波裂解细胞，进行体外验证。</line>
`,
    engineering_design: `
    <title>设计</title>
<line>设计一个基于环状RNA的组装工厂并不容易，但也并不复杂。这个简单的“工厂”由两部分组成：环状RNA和特殊设计的融合蛋白。环状RNA就像一个工厂，用来组装生产机器(融合蛋白)。环状RNA序列的几个片段将形成茎环结构，为RBP提供结合位点。</line>
<line>同样地，我们也需要对蛋白质进行修改。通过将RNA结合结构域与蛋白自身结构融合，蛋白质获得了与RNA特定茎环结合的能力。也就是说，如此一来，RNA支架能够聚集多种融合蛋白。总之，环状RNA及其结合的融合蛋白作为基本构件，组成了基于环状RNA的组装工厂(图1)。</line>
<photo>{photo1}</photo>
<note>图1 环状RNA支架模式：环状RNA与融合蛋白</note>
<line>在实验中，还有很多细节有待考虑。例如：一个工厂可以安置多少台生产机器？(环状RNA上可以携带多少融合蛋白)；如何确定这些机器之间的最佳距离？(相邻环状RNA茎环之间的最佳间距)；这个“工厂”是在细胞内部还是外部？(体内或体外实验)......这些问题的答案对于我们项目的细化至关重要(图2)。</line>
<photo>{photo2}</photo>
<note>图2 构建理想的环状RNA支架需要考虑的问题</note>
<line>根据我们的设计和上述问题的考虑，我们的实验包括两部分：基于真核细胞的细胞内实验和基于原核细胞胞浆(大肠杆菌裂解液)的细胞外实验。两个实验独立进行，相辅相成。我们将慎重考虑环状RNA的设计和融合蛋白的选择。</line>
<subtitle>1 基于真核细胞的胞内实验</subtitle>
<sectitle>1.1 环状RNA</sectitle>
<line>环状RNA在真核生物中很常见，这意味着这些细胞中可能会发生RNA的环化过程。由于环状RNA没有游离的3'和5'末端，能够抵抗RNA外切酶的切割，与线性RNA分子相比，它们表现得更稳定。</line>
<line>我们进行了一系列与RNA相关的体外实验，包括DNA转录和RNA环化。体外获得环化后的RNA，用Liposome 2000试剂转染HEK293细胞。与体内环化过程相比，显然，体外环化过程更灵活。另一方面，由于RNA酶的污染，体外环化的RNA降解率也会更高。</line>
<line>最初设计的环状RNA包含MS2和PP7两个结合位点。我们在两个茎环之间设计了一个15nt的内部序列，以避免两个相邻融合蛋白之间的相互干扰。</line>
<line>我们在环状RNA的环化位点末端设计了一个10nt的互补序列，这可能对促进环化过程至关重要。</line>
<line>我们试图预测RNA的二级结构，避免额外茎环的形成(图3)。</line>
<photo>{photo3}</photo>
<note>图3 环状RNA二级结构的预测</note>
<sectitle>1.2 融合蛋白</sectitle>
<line>融合蛋白的选择也是我们实验的重要部分。我们选择了两种广泛使用的RNA结合蛋白MS2和PP7作为适配器。在我们的体内验证实验中，我们分别将它们与EGFP的N端(1-158AAs)和C端(159-238AAs)融合。EGFP已被证明是优秀的报告蛋白和生物化学传感器，具有广泛的应用。在分裂状态下，它们不会发出荧光，但分裂的多肽可以通过蛋白质-蛋白质相互作用重新组装而恢复荧光。荧光发色团可以在EGFP分离的N端片段内自催化形成。蛋白质互补相互作用可以驱动分裂蛋白恢复荧光。EGFP系统对蛋白质相互作用的快速响应能力对于检测活细胞中许多其他类型的成对相互作用的动力学至关重要。我们采用western blot检测两种融合蛋白的表达。</line>
<photo>{photo4}</photo>
<note>图4 分裂EGFP原理示意图(A)左：系统中不存在环状RNA；(B)右：环状RNA存在，可见荧光</note>
<subtitle>2以原核细胞胞浆(大肠杆菌裂解液)为基质的胞外实验</subtitle>
<sectitle>2.1环状RNA</sectitle>
<line>在原核生物中人工表达和纯化环状RNA仍然是一个挑战。环状RNA仅在真核生物中发现，这一事实表明原核细胞可能缺乏RNA环化机制。因此，我们仍将进行体外环化。将环化的RNA直接添加到原核生物的超声裂解液（大肠杆菌裂解液）中，为今后在原核细胞中构建环化RNA提供理论依据。</line>
<line>事实上，在大肠杆菌中构建环状RNA已经实现。José-Antonio Daròs已经成功构建了内含子依赖的自我环化载体（图5），为构建原核生物人工环状RNA提供了平台。(https://doi.org/10.1080/15476286.2021.1872962)</line>
<photo>{photo5}</photo>
<note>图5 利用ELVd设计环状双链RNA</note>
<line>考虑到环状RNA分子愈长，对应更低的环化效率，我们将环状RNA缩短为69 nt。只保留了10nt的内部序列和必要的茎环。我们再次预测了二级结构，避免产生出人意料的结果(图6)。</line>
<photo>{photo6}</photo>
<note>图6 缩短后的环状RNA的二级结构：如图所示为MS2和PP7的茎环</note>
<sectitle>2.2 RNA结合蛋白（RBP）的选择</sectitle>
<line>我们选择了常用的RBP，大多来自大肠杆菌或噬菌体外壳蛋白。这些RBP的氨基酸数目在130以下，这样这些小分子就不会干扰与它们融合的酶的功能结构。此外，还对其适配体的特性进行了研究。例如，野生型PP7的解离常数Kd仅为1nM。(表1)</line>
<photo>{photo7}</photo>
<note>表1 PP7外壳蛋白的解离常数；变异的PP7</note>
<line>除MS2和PP7外，我们还在基因合成公司的帮助下，订购了Qβ、λN、SLBP(来自HEK293)并克隆到pET28a载体，为环状RNA支架上的组合提供了丰富的工具箱。不同亲和力和分子大小的适配体-RBP组合的选择可以满足多种实验要求。我们纯化了这些RBP，并测试它们与适配体的亲和性(解离常数)，以标准化RBP元素。</line>
<sectitle>2.3 融合蛋白</sectitle>
<line>在完成体外实验的验证后，我们希望环状RNA支架能够在实际中应用。CenA是一种内切葡聚糖酶，可将水溶性纤维素分解成纤维二糖。BglA是一种6-磷酸-β-葡萄糖苷酶，可以将纤维二糖进一步转化为葡萄糖。也就是说，CenA和BglA可以通过两步顺序的酶促反应催化纤维素转化为葡萄糖(图7)。我们还使用western blot检测了这两种蛋白的表达。然后用超声波将细胞裂解，得到裂解液。将预先构建的环状RNA加入到得到的裂解液中作为实验组，另一个未构建环状RNA的为对照组。通过分光光度计检测葡萄糖浓度的变化，验证环RNA元件是否有助于提高反应效率。</line>
<photo>{photo8}</photo>
<note>图7 CenA和BglA催化的两步酶促反应</note>
<line>环状RNA支架可以缩短两个相邻酶之间的距离，提高连续反应的效率。在我们的实验中，环状RNA支架使CenA和BglA的距离更近，从而使CenA的产物纤维二糖迅速扩散到BglA的活性中心并转化为葡萄糖。与自然条件相比，环状RNA支架的存在改变了这些酶的组织方式(图8)，从而加快了连续的多步酶促反应的效率。</line>
<photo>{photo9}</photo>
<note>图8 环状RNA缩短了两种酶的间距</note>
<line>CenA和BglA分别与MS2和PP7在大肠杆菌BL21a中融合表达。我们还使用western blot检测这两种蛋白的表达。然后用超声波将细胞裂解，得到裂解液。将预先构建的环状RNA加入到裂解液中作为实验组，另一个未构建环状RNA的为对照组。通过分光光度计检测葡萄糖浓度的变化，验证环状RNA是否有助于提高反应效率。</line>
<line>环状RNA ciRS-7具有至少70个miR-7结合位点，可以起到分子海绵的作用。受此启发，我们希望在我们的环状RNA上设计多个蛋白结合茎环，以实现更高的结合效率(图9)。由于RNA体外环化效率的限制，我们无法实现这一目标。我们希望为未来的iGEMers提供这样巧妙的设计。如果这样的想法在未来某一天真的成为现实，它将为合成生物学创造更多的可能性。</line>
<photo>{photo10}</photo>
<note>图9 一个环状RNA分子上有多个RBP结合位点</note>
<line>想了解更多关于设计方面的细节，跳转至<link>design=>/project/design</link></line>
    `,
    engineering_build: `
    <title>建造</title>
<subtitle>1 载体构建</subtitle>
<line>我们计划将系统分成不同的部分，单独进行测试，最终将它们组装进细胞。我们从该公司订购了载体(pET28a, pcDNA3.1)、DNA序列和引物。</line>
<sectitle>1.1 五种RBP的建构</sectitle>
<line>我们首先将5种RBP克隆到表达载体pET28a中，然后对每一种RBP进行纯化，表征其功能参数，如解离常数Kd，定量描述其与特定适配体的亲和性。基因电路图如下：</line>
<photo>{photo11}</photo>
<note>图10 表达5中RBP的基因电路</note>
<line>我们使用Beyotime公司的无缝克隆试剂盒(D7010S)构建了包含以上5个基因电路的质粒。RBP的DNA序列取自擎科生物技术，引物如下：</line>
<note>表2 用于RBP同源重组的引物</note>
<photo>{photo12}</photo>
<line>将pET28a质粒线性化(BamHI和HindⅢ)后,通过Beyotime公司的无缝克隆试剂盒(D7010S)将扩增片段连接到线性化的载体上。</line>
<photo>{photo13}</photo>
<note>图11 λN、PP7、SLBP、MS2的PCR扩增(由左至右)。DNA marker为DL1000</note>
<photo>{photo14}</photo>
<note>图12 SLBP和Qβ的PCR扩增(从左到右)，DNA marker为DL1000</note>
<photo>{photo15}</photo>
<note>图13  PP7、λN、SLBP和Qβ的转化和筛选</note>
<photo>{photo16}</photo>
<note>图14 MS2的转化和筛选</note>
<photo>{photo17}</photo>
<note>图15 SLBP、MS2、PP7、Qβ、λN的菌落PCR(从左到右)除第一泳道</note>
<line>然后选择菌落PCR的阳性结果进行测序，提取目的质粒待用。</line>
<sectitle>1.2 用于分裂EGFP实验的EGFP片段-RBP基因的构建。</sectitle>
<line>与5种RBP克隆的方法相同，我们将两个插入片段同时克隆到线性化的载体(pcDNA3.1)中。根据Ariel B. Lindner[1]的描述，EGFP分裂为1-158aa片段(EGFP-N)和159-238片段(EGFP-C)，然后通过一个长度为7aa的柔性连接肽分别与MS2和PP7融合。</line>
<photo>{photo18}</photo>
<note>图16 分裂EGFP的基因电路</note>
<photo>{photo19}</photo>
<note>图17 两个pcDNA3.1重组质粒的转化</note>
<photo>{photo20}</photo>
<note>图18 菌落PCR结果表明两个用于分裂EGFP的质粒构建成功</note>
<line>菌落PCR阳性，表明融合蛋白载体构建成功。</line>
<sectitle>1.3 纤维素酶-RBP表达载体的构建</sectitle>
<line>擎科生物技术帮助我们合成CenA-MS2和BglA-pp7表达质粒(pET28a)。我们选择了柔性连接肽，长度分别选择为15aa和20aa。连接肽的序列分别为(GGGGS)3和(GGGGS)4。
我们还订购了CenA密码子优化版本，称为CenA_optimized。我们希望该密码子优化后，能够提高纤维素酶在大肠杆菌中的表达量。为了区分CenA和CenA_optimized，我们需要分别构建只包含CenA和CenA_optimized的质粒。由于时间限制和新冠肺炎疫情，我们未能成功实现这一目标。纤维素酶-RBP的表达将在测试页中列出。</line>
<subtitle>2 环状RNA支架的构建</subtitle>
<line>在分裂EGFP实验中，将环状RNA和融合蛋白表达载体同时导入真核细胞HEK293，在荧光显微镜下观察其发光强度。阳性对照为完整的EGFP细胞，阴性对照为未构建环状RNA支架的细胞。为了定量地测试我们的系统，我们使用FCM(流式细胞术)来确认我们的设计是有效的。</line>
<line>然后，将纤维素体系转移到BL21（大肠杆菌）。使用超声波裂解细胞膜形成体外环境。测量单位时间内产生的葡萄糖量，这可以很容易地用分光光度法测量。我们将测试加入我们的环状RNA支架后，反应速率可以达到多少倍。</line>
<line>我们发现了两篇研究论文，分别在哺乳动物细胞[2]和E.coli[3]中成功构建共价闭合RNA分子。这些突破将极大地扩展我们的环状RNA支架的应用。然而，我们决定遵循Oliver Rossbach的论文[4]，通过体外方法获得我们的环状RNA。</line>
<sectitle>2.1 体外转录</sectitle>
<line>我们使用的是Thermo Scientific TranscriptAid T7 High Yield Transcription Kit(K0411)，并按照其说明书操作。</line>
<line>首先，我们让擎科生物技术有限公司合成了用于体外转录的DNA模板。引物如下:</line>
<line>F: 5“-TAATACGACTCACTATAGGGG-3”</line>
<line>R: 5“-CAGGTCCGTTGGTTCGTT-3”</line>
<line>PCR扩增后，我们按照下表进行体外转录：</line>
<note>表3 体外转录反应</note>
<photo>{photo21}</photo>
<line>我们认为T7聚合酶可以将GMP作为转录本的初始核苷酸，因此我们在反应体系中加入了GMP。</line>
<photo>{photo22}</photo>
<note>图19 第一次转录。条带模糊，显示有RNase污染。</note>
<photo>{photo23}</photo>
<note>图20 体外转录成功</note>
<sectitle>2 环化</sectitle>
<line>接下来，我们用T4 RNA连接酶I对上面的转录本进行环化。我们使用的试剂盒是NEB的T4 RNA Ligase 1 (ssRNA Ligase)(M0204S)。实验方法如下：</line>
<note>表4 环化反应</note>
<photo>{photo24}</photo>
<photo>{photo25}</photo>
<note>图21 第一次环化产物。左泳道为线性产物，右泳道为环化产物。第一次失败，因为产物的迁移率与线性产物相同</note>
<photo>{photo26}</photo>
<note>图22 RNase R实验。从左到右依次为不含RNase R的线性RNA、含RNase R的线性RNA、不含RNase R的环化产物、含RNase R的环化产物。第一次环化以失败告终。</note>
<line>我们认为转录本RNA的5’端大部分是三磷酸，所以T4 RNA Ligase I不能工作。在此基础上，我们从擎科生物技术订购了5’单磷酸修饰RNA。这次我们成功构建了环状RNA。</line>
<photo>{photo27}</photo>
<note>图23 环化成功。左泳道为线性RNA，右泳道为环状RNA。环状RNA的迁移速度比线性 RNA慢</note>
    `,
    engineering_test: `
    <title>测试</title>
<line>实验结果表明，BBa_K3960001、BBa_K3960002、BBa_K3960006、BBa_K3960007、BBa_K3960011、BBa_K3960012、BBa_K3960017等新零件都能正常工作。下面的结果解释了为什么它们单独是有效的，以及作为一个整体是有效的。你也可以在相关零件的页面上找到这些结果。</line>
<subtitle>1 环状RNA</subtitle>
<line>我们进行了RNase R实验，比较其与线性 RNA的稳定性。我们发现，环状RNA经RNase R处理足够长的时间后出现部分降解。根据RNase R的说明书，我们推测该环状RNA对RNase R比较敏感。不管怎样，我们依然会用我们的环化产物进行后续实验。</line>
<photo>{photo28}</photo>
<note>图24 RNase R实验。从左到右为不含RNase R的线性RNA，含RNase R的线性RNA，不含RNase R的环化产物，含RNase R的环化产物</note>
<subtitle>2 EGFP片段-RBP融合蛋白在HEK293中的表达</subtitle>
<line>我们分别将含有EGFP-N-MS2和EGFP-C-PP7的质粒转染到HEK293中，检测我们的分裂EGFP片段是否表达，以防止假阴性结果的干扰。Western blot结果显示，我们的目的融合蛋白均在HEK293中表达。</line>
<photo>{photo29}</photo>
<note>图25 EGFP片段的Western blot结果。左泳道为EGFP-N-MS2，右泳道为EGFP-C-PP7</note>
<subtitle>3 分裂EGFP</subtitle>
<line>我们有四组细胞进行流式细胞术。它们分别是：1阴性对照(无质粒或RNA转染)；2阳性对照(转染表达EGFP的质粒)；3两个分裂EGFP质粒共转染；4用分离的EGFP质粒和环状RNA支架共转染。结果表明，第4组的亮度介于第1组和第2组之间，符合我们的设计。第3组的亮度和第一组一样低，说明没有假阳性影响我们的结果。总而言之，这个分裂EGFP证明了我们的<link>环状RNA支架是有效的。=>Proof </link></line>
<photo>{photo30}</photo>
<note>图26 阳性对照</note>
<photo>{photo31}</photo>
<note>图27 阴性对照</note>
<photo>{photo32}</photo>
<note>图28 含环状RNA支架共转染</note>
<photo>{photo33}</photo>
<note>图29 不含环状RNA支架共转染</note>
<subtitle>4 纤维素酶-RBP融合蛋白的表达</subtitle>
<line>我们将含有纤维素酶-RBP的质粒转化到BL21(DE3)感受态细胞中，通过超声得到含有相应纤维素酶的裂解液。我们也进行了WB，以确保我们的融合蛋白表达。但由于时间的限制，我们只得到了CenA_optimized-MS2融合蛋白，没有对其进行进一步的活性鉴定。</line>
<subtitle>5 纤维素酶-RBP融合蛋白的表征</subtitle>
<line>由于时间限制，我们未能完成这项工作。然而，我们将完善这一部分来完成我们的项目。</line>
<subtitle>6 纤维素（环状RNA）的两步降解</subtitle>
<line>由于时间限制，我们未能完成这项工作。然而，我们将完善这一部分来完成我们的项目。</line>
    `,
    engineering_other: `
    <title>学习</title>
<line>通过定量实验结果，我们知道我们已经成功构建了环状RNA支架，并且证明它是有效的。然而，我们的环状RNA并不是那么稳定。我们需要它更能抵抗外源RNA酶。此外，虽然分裂EGFP实验表明我们成功地在支架上共定位了两个蛋白质，但亮度很弱。我们应该考虑改变两个相邻的适配体之间的间隔长度和RBP与蛋白质之间连接的灵活性或长度。在未来的纤维素降解实验设计中，我们将从这两个方面优化融合蛋白和环状RNA支架。</line>
<title>再设计</title>
<line>这次纤维素降解实验，首先我们会选择不同的支架，分别含有5nt, 10nt, 15nt, 20nt的间隔长度，找出最佳的间隔长度；然后，<link>我们有SYSU-Software来帮助我们选择RBP和纤维素酶之间的连接肽；=>/hp/partnership</link>最后我们分别为CenA_optimized-MS2和BglA-PP7选择了长度为15aa和20aa的完全柔性的连接肽。</line>
<subtitle>参考文献</subtitle>
<ref>[1]Camille J. Delebecque,Ariel B. Lindner,Pamela A. Silver,Faisal A. Aldaye. Organization of Intracellular Reactions with Rationally Designed RNA Assemblies[J]. Science,2011,333(6041):</ref>
<ref>[2]Jacob L. Litke,Samie R. Jaffrey. Highly efficient expression of circular RNA aptamers in cells using autocatalytic transcripts[J]. Nature Biotechnology: The Science and Business of Biotechnology,2019,37(6):</ref>
<ref>[3]Ortolá Beltrán,Cordero Teresa,Hu Xu,Daròs JoséAntonio. Intron-assisted, viroid-based production of insecticidal circular double-stranded RNA in Escherichia coli.[J]. RNA biology,2021:</ref>
<ref>[4]Janina Breuer,Oliver Rossbach,Emanuela Jacchetti. Production and Purification of Artificial Circular RNA Sponges for Application in Molecular Biology and Medicine[J]. Methods and Protocols,2020,3(2):</ref>
    `,

    hp_overview: `
    <line>为了让我们的工作对世界做出贡献，我们开展了许多hp，积极与外界沟通，征求大家的意见，与其它队伍合作，并获得反馈，以改进我们的设计。</line>
<line>下面我们将我们所做的事情列了一个大纲概括如下，了解详情可以前往相应的页面：</line>
<subtitle>Interga Human Practices</subtitle>
<line>我们的hp如何影响我们的设计，包括想法、circRNA结构、检测等等。<more>interga</more></line>
<subtitle>Collaborations</subtitle>
<line>我们与其他队伍的合作，如SCU-CHINA、ZJTU-CHINA等。<more>collaborations</more></line>
<subtitle>Partnership</subtitle>
<line>我们如何与SYSU-Software进行长期合作。<more>partnership</more></line>
<subtitle>Implementation</subtitle>
<line>我们将如何在公众、公司、医疗领域以及其他团队的项目中实施我们的项目。<more>implementation</more></line>
<subtitle>Communication</subtitle>
<line>我们如何通过ccic和五校交流会与公司和其他团队进行科学交流。<more>communication</more></line>
<subtitle>Education</subtitle>
<line>我们如何向高中和公众推广合成生物学。  <more>education</more></line>
    `,

    hp_interga: `
<first>人类实践是研究你的工作如何影响世界，以及世界如何影响你的工作。通过这项工作我们才能回答我们的项目对社会的影响问题，它是否真的会让世界变得更美好、是否符合伦理原则、是否可以安全实施。我们的人类实践工作始终尊重公众态度，利益相关者观点以及专家建议，整个项目的发展过程中都存在着这种对话。在Integrated Human Practices中，你可以看到我们为整合来自人类实践的反馈并将其纳入我们的项目中所做的努力。</first>
<subtitle>对Design的影响</subtitle>
<sectitle>背景</sectitle>
<line>iGEM不仅关于基因工程，而且还关于我们可以通过合成生物学为世界做些什么。我们队伍关心的是全球的环境问题，汽车、船舶、飞机等排放的尾气是造成大气污染的主要来源。有研究结果显示，在严格的二氧化碳减排方案中，到2050年生物石化产品将占石化产品总产量的33%，其中大部分来自以生产先进燃料为主要产品的设施的联合产品[1]。目前世界上有超过60个国家和地区推广车用乙醇汽油，年消费乙醇汽油约6亿吨，占全球汽油消费总量的60%左右。[2]然而燃料乙醇，其成本超过每吨4000元，降低其生产成本是其推广使用的关键。</line>
<sectitle>想法——从相分离到CircRNA</sectitle>
<line>乙醇的生产离不开酶促反应，我们希望通过提高酶反应速率来达到目的。影响酶促反应速率的因素有很多：底物浓度，酶浓度等等，因为我们的目标是降低燃料乙醇生产成本，我们选择了从酶浓度入手。在进行头脑风暴后我们希望利用相分离使酶聚集从而实现提高某位点酶浓度。为了更了解相分离以及这个方案是否可行，我们同生物化学专家进行了对话，并讨论了如何利用合成生物学作为解决方案。</line>
<line>崔隽教授是中山大学生命科学学院生物化学系主任，万刚教授是中山大学生命科学学院生物化学与分子生物学方向教授，其研究方向包括相变功能与调控。万刚教师指出“利用相变构建无膜细胞器，可以实现提高局部浓度”，提醒我们注意想法是否新颖。崔隽教授提到“相变是通过极性的差异形成的，目前发现很多分子比如RNA或者甚至DNA都可以诱导相分离形成，但是相分离是一个很复杂的系统，需要对相分离的程度进行控制”。</line>
<photo>{photo1}</photo>
<note>图1.拜访崔隽教授</note>
<photo>{photo2}</photo>
<note>图2.拜访万刚教授</note>
<line>在和教授的交谈中我们认识到相分离是可以实现对蛋白质浓度的局部提高，但是其不可控性也较大，作为一支本科生队伍，我们寻求一种既能达到提高浓度的目的，又能在我们控制下的方案。</line>
<line>在大量查阅文献后，我们希望利用circRNA作为分子支架，这既是一种可控的方案，又可以实现我们的目的。我们与张锐教授进行交谈，张锐教授是中山大学生命科学学院研究RNA表观遗传学以及生物信息学的教授，他认可了我们的想法，并且指出“circRNA可以与特定的蛋白质相互作用，可以利用多肽链作为linker实现不同蛋白质的聚集”。</line>
<photo>{photo3}</photo>
<note>图3. 拜访张锐教授</note>
<line>这激发我们一个想法：这个系统不仅适用于提高乙醇生产时酶浓度，也可应用于其他的酶促反应，就这样我们的CRAFT（CircRNA Assembly FacTory）诞生了。</line>
<sectitle>生物体内实验&体外实验</sectitle>
<line>在我们在设计实验时，最先需要考虑是在生物体内或者体外进行实验。考虑到体内环境的不可控性，我们刚开始选择了无细胞系统，在胞外开展实验，然而在胞外进行实验得到的蛋白质提纯效果较差。在我们几乎陷入死胡同时，我们采访了张钰森师兄。</line>
<line>我们与他的谈话很有启发性，他让我们更深入了解了在体外和体内实验的优缺点，我们需要表达融合蛋白，胞外进行实验需要对蛋白质进行提纯，这一步实验效率较低，并且体外实验在利用split EGFP验证时荧光浓度可能检测不到，而我们担心的在胞内环化RNA难度较大的问题，张钰森师兄为我们提供了一种胞内环化方法，于是我们选择将体外和体内的实验同时进行，主要侧重于以HEK293细胞作为底盘生物进行实验。</line>
<photo>{photo4}</photo>
<note>图4.拜访张钰森师兄</note>
<sectitle>CircRNA 结构</sectitle>
<line>当我们选择使用CircRNA作为分子支架时，我们就直观的将CircRNA看作一种刚性的环状结构。然而在后续与崔隽教授的对话中，他提示到，CircRNA实际存在着复杂的三级结构，这种折叠方式会影响RNA结合蛋白与其结合，这可能会对我们实验有着很大的影响。谈话后我们意识到这是一个我们需要考虑的重要问题，在经过文献查阅及讨论后，我们决定使用多种RNA三维结构预测软件来预测我们构建的CircRNA结构，判断其位点能否与RNA结合蛋白正确结合，详见<link>Model=>model</link>。</line>
<sectitle>检测</sectitle>
<line>关于对整个系统搭建成功的检测，我们想到的第一件事是使用荧光蛋白来检测，选择的了split EGFP。我们在与青岛蔚蓝生物(Vland)重要研发者Dr.Mark采访与交流得到了非常重要的反馈，这是一个致力于为生物制造提供核心技术支持，为传统产业提供清洁节能技术，为食品安全提供绿色解决方案的公司。在采访过程中，Mark博士指出融合蛋白在细胞中表达后可能会错误折叠，或者被快速降解，还可能会导致假阴性结果，并建议可以使用纤维素降解的两种酶，通过检测产物葡萄糖的浓度来检测系统是否搭建成功。这相比split EGFP来说可能更容易检测到结果。</line>
<photo>{photo5}</photo>
<note>图5.采访青岛蔚蓝生物(Vland)重要研发者</note>
<sectitle>其他</sectitle>
<line>我们在整个过程中与其他的iGEM队伍有着频繁地交流，与其他队伍成员们聚在一起谈论项目的进展以及不足，其中规模最大的是CCiC(Conference of China iGEMer Community),一个由中国iGEM参赛队伍自主发起的全国性峰会，在与他们的交流中一步一步将我们的项目完善。具体你可以在<link>Communication=>communication</link>部分找到更多信息。</line>
<subtitle>道德准则</subtitle>
<line>当“CRAFT”能够完美运行的时候，因为存在着伦理问题，它并不一定能被大众所接受。因此，我们向我们自己和我们在整个人类实践活动中接触的利益相关者提出伦理问题。作为年轻的科学家，我们首先要做到对社会负责，对于存在的安全伦理问题我们要严谨对待。在投放的问卷中，我们也看到了大众对破坏自然，创造生命的伦理问题的担忧。</line>
<line>在采访Dr.Mark时，他提到“如果运用在食物生产上面的话，首先要注意内毒素的清除，保证安全的问题，另外对于伦理问题，我们要遵守当地法律法规。基因工程确实是有人能接受，有人不能接受，但其实并不影响企业的经济效益。”在采访张根水教授时他提到一个术语“有罪推论”，它是指当一种新技术的安全性还不能完全被证明的时候，我们先认为它是坏的。</line>
<line>我们意识到对于伦理的担忧是合理的，我们需要做的不是消除这些担忧，而是让他们更全面地了解合成生物学，这样他们就能看到合成生物学的好处和风险。因此我们开展了一系列的活动，详见<link>Education=>education</link>部分。</line>
<subtitle>参考文献</subtitle>
<ref>[1].\tde Oliveira, C.C.N., et al., The role of biomaterials for the energy transition from the lens of a national integrated assessment model. Climatic Change, 2021. 167(3-4).</ref>
<ref>[2]https://mp.weixin.qq.com/s/X6ag3TgiB8NhF8B4jXT0iQ</ref>
    `,

    hp_collaborations: `
    <line>为了更好地改进我们的项目同时更好地推广合成生物学，我们今年与许多其它队伍如SCU-CHINA、SCUT-China、SYSU-Software等开展了许多短期或长期的合作。</line>
<title>With SCU-CHINA</title>
<line>为了推广合成生物学，让普罗大众了解到更多合成生物学乃至生物科研的更加具体而深入的内容。受川大邀请，我们共同开展了合成生物学专题课程项目。联合多支在特定主题课题上有积累的中国区iGEM竞赛队伍，录制一系列合成生物学网络课程。实现合成生物学向其他生物学领域、其他学科领域的扩展。增大iGEM社群影响力，为吸引、培养更多合成生物学领域人才产生积极作用。</line>
<line>因为我们队伍今年以RNA框架为主题，因此我们以环状RNA工厂和乙醇的工业生产为题参与这一科普项目，并录制了工业生产方面的科普视频作为计划的一部分参与进来，增大了项目的覆盖面。</line>
<photo>{photo1}</photo>
<note>图1 我们队伍录制的合成生物学专题课程视频</note>
<title>With ZJTU-CHINA</title>
<line>这个暑假，我们使用腾讯会议举办了一场线上会议，邀请ZJTU-CHINA进行线上交流。通过交流，ZJTU-CHINA对我们circRNA的设计有很大的帮助。同时，我们也对他们RNA实验的相关操作做了一些指导。</line>
<line>ZJTU-CHINA正在开发一种无细胞RNA生物传感器，用于检测尿液或血液中的各种RNA分子，已被证明可作为各种疾病诊断和预后的生物标志物。</line>
<photo>{photo2}</photo>
<note>图2 举办线上交流会与ZJTU-CHINA进行线上交流</note>
<line>通过交流，我们发现了彼此间项目的共同点，即都需要设计并构造一个短链RNA来完成后续实验验证，于是就RNA设计方面进行了深入探讨。起初，由于我们实验进展较快，并且体外转录产生的RNA长度符合ZJTU-CHINA的要求，于是打算将转录产物寄送给ZJUT-CHINA，协助它们完成实验验证；但ZJTU-CHINA的成员通过NUPACK（http://www.nupack.org/）对我们的RNA一级序列生成二级序列，结果表明我们的aptamer形成的茎环结构不符合它们的要求。另外，通过建模，他们使用StructureEdito，RNAfold分析我们环状RNA的二级结构，发现我们的scaffold可能存在我们预料之外的第四个颈环结构，这可能会影响其它aptamer发挥功能。令我们困扰的是，这与我们使用RNA Designer得到的结果不一样。</line>
<photo>{photo3}</photo>
<note>图3 使用StructureEditor预测circRNA1二级结构</note>
<photo>{photo4}</photo>
<note>图4 使用RNAfold预测circRNA1二级结构</note>
<line>为了保险起见，我们删除了不必要的序列，只留下了aptamer和10nt spacer，经ZJUT-CHINA使用StructureEdito，RNAfold测试后，得到如下结果：</line>
<photo>{photo5}</photo>
<note>图5 使用RNAfold预测circRNA2二级结构</note>
<photo>{photo6}</photo>
<note>图6 使用StructureEditor预测circRNA2二级结构</note>
<line >后续实验中，我们使用改进后的环状RNA。感谢ZJTU-CHINA对我们circRNA设计方面的帮助。</line>
<line>另外，他们在RNA操作方面得到了我们的帮助。在体外转录后电泳检测，发现有明显的降解，于是我们针对RNA实验的操作注意事项给他们提了一些建议，帮助他们后续得到较为纯净的RNA产物。</line>
<photo>{photo7}</photo>
 <note>图7 RNA操作须知</note>
<line>不仅如此，由于他们的转录产物需要与蛋白混合后退火孵育，我们参考RNA环化时的退火步骤给他们了参考protocol：</line>
<line>Add 10× annealing buffer to a final concentration of 1× to purified transcripts and allow the annealing of the double-stranded stem-loop regions (or splint oligonucleotide) by incubating the samples for 2 min at 95 ◦C and decreasing the temperature by 1 ◦C/10 s to 25 ◦C within a thermocycler.</line>
<line>10× circRNA annealing buffer (100 mM Tris pH7.5, 500 mM NaCl)</line>
<line>了解更多，也可以前往ZJTU-CHINA的页面：<href>https://2021.igem.org/Team:ZJUT-China/Collaborations</href></line>

<title>With SYSU-Software</title>
<line>今年，我们与SYSU-Software开展了长期的合作，这一合作贯穿了我们项目开展的一整年。从组建队伍之初，我们便在项目进展、项目设计、实验规划等多个方面展开合作，积极讨论。</line>
<line>通过多次讨论交流，我们一方面互相督促项目的进展查漏补缺，另一方面，在SYSU-Software为我们提供结构预测等软件支持的同时，我们也协助他们开展实验室的实验工作。
在合作过程中，我们通过吸收对方做得好的idea同时借鉴对方遇到的问题及积累到的经验来对我们自身的项目进行调整，不断优化改进我们的项目，收获到了相得益彰的效果。
了解更多我们与SYSU-Software的合作，可以前往<link>Partnership=>/hp/partnership</link>页面。</line>
    `,

    hp_partnership: `
    <line>今年，我们与SYSU-Software开展了长期的合作，这一合作贯穿了我们项目开展的一整年。从组建队伍之初，我们便在项目进展、项目设计、实验规划等多个方面展开合作，积极讨论。并在此过程中得以不断对我们自身的项目进行改进。</line>
<title>交流进展</title>
<line>队伍组建初期，我们两支队伍的领队便建立了一个共同的交流群，在群内我们会不定期地交流项目进展过程中遇到的疑问，同时通过了解对方队伍的进度，来调整我们的计划。</line>
<photo>{photo1}</photo>
<note>图1 两只队伍领队群</note>
<photo>{photo2}</photo>
<photo>{photo3}</photo>
<note>图2 图3 两只队伍互相交流各种问题</note>
<title>开幕式</title>
<line>在开幕式当天，我们便租借了一个会议室，供两队的成员们一同观看开幕式并线下开展了一个简单的茶话会。为两队的队员们提供了一个面对面交流的机会。</line>
<line>在本次茶话会上，我们深入地了解了对方队伍的项目情况，并确定了他们会为我们提供必要的软件支持</line>
<photo>{photo4}</photo>
<note>图4 两队举办茶话会一同观看开幕式</note>
<title>实验</title>
<line>由于软件队的实验开展时间比我们晚，当他们开始实验时我们已经进行了数月的实验，积累了较多的经验。因而为了提高效率，我们协助软件队进行了部分实验前期的设计及准备工作，同时指导了他们一些简单的实验操作，帮助他们快速熟悉实验开展的流程及步骤。</line>
<line>在此过程中，我们两支队伍之间对各自课题的了解也得以进一步深入</line>
<photo>{photo5}</photo>
<note>图5 我们指导SYSU-Software时使用的图谱</note>
<title>项目交流</title>
<line>在具体的项目方面，由于我们两支队伍的项目有许多类似的部分，因此我们有时会根据对方提供的数据、资料及建议等来对我们自身的项目进行调整或优化。</line>
<line>例如在融合蛋白的linker选择上，我们一开始是打算随机选择。但因为软件队的项目涉及linker设计，对此较为了解，在听了他们为我们详细地介绍了linker的选择之后，我们才得知linker分为柔性和刚性两种，我们在选取linker时，也要将此考虑在内。</line>
<line>除此之外，我们的model部分的空间结构预测中，蛋白质结构的预测则是由软件队为我们完成。</line>
{pdb}
<line>4月，我们和SYSU-Software一同参加了由SCUT-CHINA主办的五校交流会。在会上，我们互相了解了对方队伍项目的总体设计，在此次会议中，SYSU-Software受我们队项目的启发，决定在项目中研究光控的蛋白聚集，实现对多步反应速度的光控制。</line>
<photo>{photo6}</photo>
<note>图6 五校交流会</note>
<title>hp方面</title>
<line>在暑假期间，我们队伍前往生物公司进行访谈（具体详情可见）。在此过程中，我们收获到了很多有益的建议。而软件队在得知我们这一访谈历程之后也希望可以与该公司取得联系，因此我们为他们提供了联系的渠道，帮助他们开展访谈。</line>
 <photo>{photo7}</photo>
<note>图7 SYSU-CHINA采访青岛蔚蓝生物公司</note>
 <photo>{photo8}</photo>
<note>图8 SYSU-Software采访青岛蔚蓝生物公司</note>
<title>校内推广</title>
<line>为了在新生中间推广合成生物学及我们的项目，我们还和软件队合办了一场针对新生的宣讲，而有关宣讲会的详情，可以前往<link>educatio=>/hp/education</link>了解更多</line>
<line>关于队伍合作的更多详情，也可以前往SYSU-Software队伍的相关页面了解：<href>https://2021.igem.org/Team:SYSU-Software/Partnership</href></line>
    `,

    hp_implementation: `
    <title>Implementation</title>
<subtitle>大众</subtitle>
<line>我们着眼的是清洁燃料乙醇的生产问题，但是我们并不是仅仅局限于在实验室中进行。作为年轻的科学家，走出象牙塔，与群众接触是很关键的。我们想更好的与群众接触，由于疫情影响，我们只能通过网络来了解群众，为了更好的设计问卷，我们采访了李添明教授，李添明教授是中山大学生命科学学院一名社会生态学专家。他提出如果应用要注重用户体验，如果应用于食品方面，要注重食品安全以及人们对转基因食品的接受度。而生产工业酒精要注意其对纤维素的消耗，对宝贵粮食的消耗问题。设置问卷时可以通过旁敲侧击获得更真实的反馈，还要确保参与问卷公众的隐私。</line>
<photo>{photo1}</photo>
<note>图1.拜访中山大学社会生态学教授</note>
<line>因此我们以日常生活中的环境污染问题切入，并与人们讨论了如何在日常生活中减少污染，节约能源，来了解大众对使用合成生物学生产的乙醇燃料的接受度。这与转基因食品不同，人们的接受度会更高一点。另外我们只收集了年龄职业这两个基本信息并且承诺对问卷结果保密来确保公众的隐私。结果表明大家认为对于清洁能源的普及需要立即采取行动，这也让我们的项目更有希望，具体问卷结果分析见<download>Questionnaire results=>https://2021.igem.org/wiki/images/3/32/T--SYSU-CHINA--surveyResult.pdf</download>。</line>
<photo>{photo2}</photo>
<note>图2.我们在问卷说明中承诺对结果保密</note>
<subtitle>公司</subtitle>
<line>Vland公司是一家专注于酶制剂、微生态、动物保健品的研发、生产和销售的生物公司。Mark博士是Vland的重要研究人员，研究蛋白质工程、代谢工程、酶制备方向。</line>
<line>8月23日，我们有幸进入青岛蔚蓝生物(Vland)参观生产车间、研发中心，也采访了Dr.Key, 对我们的项目有十分重要的启发。我们了解到发酵产品从设计到成为商品，需要经历很复杂的步骤，这也意味着不仅仅是乙醇，任何其他的发酵产品效率的提高是降低成本的关键，这对公司是很有意义的。公司有利用分解秸秆纤维素得到葡萄糖，由酵母转化为酒精，这让我们很惊喜，因为我们的CircRNA scaffold正好有希望应用进去，提高酒精生产效率。具体你可以在<link>Communication=>/hp/communication</link>部分找到更多信息。</line>
<photo>{photo3}</photo>
<photo>{photo4}</photo>
<note>图 3,4. 参观青岛蔚蓝生物(Vland)生产车间、研发中心</note>
<subtitle>医药领域</subtitle>
<line>我们意识到CircRNA scaffold 不仅可以应用到生产燃料乙醇上，甚至可能可以应用到任何多酶反应中。除了环境污染外，我们依循以人为本的价值观，思考能否将CircRNA scaffold应用于医药领域。张根水教授是广州医科大学的一名药理学教授，2021-9-23我们采访了他，希望能拓展项目在医药领域的应用。张教授认为CircRNA scaffold 可能无法应用到靶向药物治疗中，因为应用于治疗中需要考虑更多的上下游反应，还需要很长的路要走，但是目前可以运用于药物生产中，加快一些药物生产的效率，降低药物的成本。</line>
<photo>{photo5}</photo>
<note>图5. 拜访广州医科大学的药理学教授</note>
<subtitle>其他队伍的项目</subtitle>
<line>我们和SYSU-Software队伍建立了长期合作的关系。在他们的项目中，涉及到了linker的设计，而linker的选择是我们项目中的关键一环。恰当的linker设计可以建立RBP和酶之间的牢固连接，并充分缓解不同酶之间由于空间位阻而产生的不利的相互作用。我们向软件队询问了利用算法设计linker的具体细节，并对此进行了一定的讨论。同时，我们帮忙对设计出的linker进行功能和理化性质的实验验证。除此之外，我们也讨论了关于RNA与蛋白质互作建模相关的问题，相互帮助与学习，致力于对双方项目做出有益的提升。你可以在<link>Collaborations=>/hp/collaborations</link>部分找到更多的信息。</line>
<subtitle>我们circRNA支架的应用展望</subtitle>
<line>通过我们以上列出的人类实践，包括访问教授和生物技术公司，我们确认了我们的circRNA工厂可以应用于那些利用微生物作为微型工厂生产有价值的化学品的生物技术公司的最初想法。我们的产品可以提高他们的生产效率，从而创造更多的经济效益。</line>
    `,

    hp_communication: `
    <title>企业参观</title>
<line>一个成熟的项目需要在可行性、安全性、现实意义等方面进行完善。因此，为了确保我们的会议能够满足现实世界的需求，来自潜在利益相关者的建议对我们来说非常重要。此外，我们还需要更多地了解行业发展情况。基于上述原因，我们访问了Vland。</line>
<line>Vland是一家专注于开发、生产和销售酶试剂、动物健康产品等的先进的生物公司。我们有幸进入了该公司学习。我们不仅参观了生产车间和研发中心，还获得了采访Vland公司重要研究人员Mark博士的宝贵机会。与他的交流给我们的项目带来了非常大的启发。</line>
<line>从与马克博士的会谈中，我们了解到：</line>
<line>在如今生产中限制产量的因素；</line>
<line>提高产量的方法；</line>
<line>使用circRNA的优势和可行性；</line>
<line>此外，他还向我们提出了几个建议。</line>
<line>可以用纤维素降解酶来验证结果，这将使该项目更有意义。</line>
<line>需要去除对人体有害的内毒素。</line>
<line>为了确保安全，需要遵循相关的法律法规。</line>
<line>我们需要通过科普宣传来使公众了解产品的生产原理和安全性。</line>
<photo>{photo1}</photo>
<note>图1 参观蔚蓝生物</note>
<title>CCIC</title>
<line>CCIC是由中国的iGEM学生发起的、目前世界上最大的区域性iGEMer交流活动。它为中国赛区的iGEMer们提供了一个相互学习的平台。在过去的几届比赛中，SYSU-CHINA从CCIC获得了很多经验和合作机会。今年我们团队也从CCIC的会议中获益良多。</line>
<line>由于疫情防控的需要，2021年8月28日，我们参加了CCiC的在线会议，期间我们与其他iGEMer分享了我们的想法并得到了他们的认可。在了解了其他团队的项目后，我们也意识到我们的项目需要进一步改进和完善。</line>
<photo>{photo2}</photo>
<note>图2 CCIC项目展演</note>
<title>五校交流会</title>
<line>2021年4月4日，我们和SYSU-Software、SZU-China、SCAU-China、SUSTech-China应邀参加了由SCUT-CHINA举行的交流会议。会议期间，每个团队都分享了他们的想法并回答了其他团队关于他们项目的问题。通过这次会议，我们不仅从其他团队的建议中获益良多，而且还结识了更多对合成生物学有共同兴趣的朋友。</line>
<photo>{photo3}</photo>
<note>图3 交流会</note>
<line>其他团队向我们提出了以下问题：</line>
<line>CircRNA在vibo实验中可能被降解或被抑制。如何解决这个问题？</line>
<line>如何获得RBS的序列？</line>
<line>RNA在与这么多蛋白质结合的情况下会不会断裂？</line>
<line>这个项目对人类社会有什么好处？</line>
<line>此外，他们还向我们提出了一些建议。</line>
<line>需要注意的是对部件的要求。</line>
<line>我们可以与华南理工大学研究核酸与蛋白质连接的教授沟通。</line>
<line>在模型的设计中可以使用分子动力学方法。</line>
<line>了解到了他们对于我们项目的疑问以及建议，我们从实验设计、人类实践等方面提升了我们的项目的可行性。</line>
<line>我们队伍今年还针对高中生、新生及大众开展教育科普活动，关于这部分内容的详情，可以前往<link>education=>/hp/education</link>页面了解</line>
    `,

    hp_education: `
    <title>社交媒体</title>
<subtitle>1.科普视频</subtitle>
<line>作为近年来RNA领域的最新研究热点，circRNA对于我们大多数同龄人来说还是一个相对陌生的分子。在我们的项目设计过程中，来自SYSU-CHINA的iGEMer认为circRNA是一个非常有研究和应用前景的分子。因此，我们希望更多的人能够对circRNA以及我们基于circRNA建立的分子支架有更多的了解。我们制作了一个关于分子支架的科普视频，并上传到bilibili，得到了相当多的观看量和积极反馈。我们相信，在看完视频后会，越来越多的人会对circRNA感兴趣并投身于这个领域。</line>
<photo>{photo1}</photo>
<note>图1 我们在bilibili平台上的账号</note>
<subtitle>2. 微信平台</subtitle>
<line>现如今，公众号是传播信息的热门媒介。我们的同龄人每天都会在公众号的推文中获取信息。因此，我们意识到公众号是一个适合我们向其他人介绍我们项目的平台，因此我们注册了一个公众账号。通过使用该账户发布推文，我们不仅向同龄人介绍了我们对项目的想法，而且还向对我们项目感兴趣的其他团队的成员分享了我们的最新进展。</line>
<photo>{photo2}</photo>
<note>图2 微信公众号及往期的部分推文</note>
<title>高校教育</title>
<line>细菌是一种重要的模式生物，也是合成生物学中必不可少的实验材料。因此，我们认为对于有志于合成生物学的高中生来说，掌握一些与细菌有关的实验方法是非常必要的。我们来到深圳龙城高级中学，教学生们如何接种细菌，如何烧灼消毒，如何实现无菌操作。我们相信，这次经历不仅能让他们学到实用的实验技能，还能激发他们对生物学的兴趣。</line>
<photo>{photo3}</photo>
<note>图3 指导高中生进行无菌操作</note>
<line>生物安全是IGEM非常重视的一个问题，更是合成生物学发展中引发人们忧虑的潜在风险。因此，了解合成生物学中生物安全的重要性和实现方法，不仅可以提高学生们的生物安全意识，更能够减少他们对于合成生物学潜在风险的顾虑。因此，我们在龙城高级中学开设了有关微生物及生物安全的讲座。我们希望，这个讲座可以奠定他们未来学习生物学的基础。</line>
<photo>{photo4}</photo>
<note>图4 在高中开展有关微生物的讲座</note>
<line>除此之外，暑假期间，在学校为高中生开办的一场科学夏令营上，我们也有幸向来参加夏令营的高中生们科普了一下合成生物学的存在。大家也对此表现出极大的兴趣。</line>
<photo>{photo5}</photo>
<note>图5 暑期高中生科学夏令营</note>
<title>校内推广</title>
<line>因为9月和10月是我们的开学季，在这段时间，有许多新生进入我们学校，为了让懵懂的大家接触到一些合成生物学及iGEM的相关信息，我们和SYSU-Software一起，在校内进行摆台，针对新生们开展了合成生物学及队伍项目的推广。</line>
<photo>{photo6}</photo>
<note>图6 和新生们宣讲我们的项目</note>
<line>我们设计并打印了介绍我们队项目的海报，并成功吸引到了许多对此感兴趣的同学与我们进行交流，并且他们展现出了未来加入我们参与比赛的意向。</line>
<photo>{photo7}</photo>
<note>图7 我们的海报</note>
<line>同时，有部分对我们队伍日常非常感兴趣的同学。我们还带领他们参观了我们的实验室，介绍了我们平时的实验内容及安排。</line>
<photo>{photo8}</photo>
<note>图8 带新生们参观我们的实验室</note>
<title>资源投放</title>
<line>iGEM是一个国际赛事，合成生物学是一门从国外兴起的学科，相关前沿的文献和资料大都是英文的。在我们的宣传教育的受众中，大部分是中学生，可能还不具备非常专业的知识和英文水平去理解合成生物学。于是，为了更好地对这部分人群进行宣传教育，我们所发布的资料和教学视频都是中文版本，或配有中文字幕。</line>
<line>最后我们将这些材料整理成为一个包裹，打包发送给他们。希望学生们能通过这些有条理的整理好的资料，更深入地认识合成生物学</line>
<subtitle>包裹的构成：</subtitle>
<line>1.小手册：以pdf呈现的两篇小手册是我们在公众号上发布的推文。《Know about iGEM》中介绍了iGEM这一国际遗传工程机器赛事，并简单的描述了“合成生物学”这一概念；《2021 SYSU-CHINA project introduction：CRAFT》详细地介绍了今年SYSU的项目及其计划和可能的应用。</line>
<line>2.讲座1：分子支架的科普 （含视频解说和PPT）基于我们今年的项目是环状RNA支架，我们对“分子支架”这一概念进行了解说和科普，希望大家通过这个科普对我们的项目有更好地认识。</line>
<line>3.讲座2：环状RNA工厂和乙醇的工业生产（circle RNA factory and Industrial manufacture of ethanol） （含视频解说和PPT）这个讲座同样是基于项目进行的一个讲座。确定将我们的环状RNA用于生产乙醇后，我们对这方面进行了科普。</line>
<line>4.反馈问卷：在您学习相关资料后，对我们的教育包裹有什么感受，请填写反馈问卷并告知我们，谢谢您的支持！</line>
<line>若希望获取我们的包裹，可以点击这里：<download>SYSU-CHINA教育包裹=>https://2021.igem.org/wiki/images/8/8a/T--SYSU-CHINA--eduPack.zip</download></line>
    `,

    members: `
<line>SYSU-CHINA（中山大学iGEM实验队）由中山大学生命科学学院创建。由于学院的支持和学生们的才智，自2009年首届大赛以来，SYSU-CHINA一直在努力工作，并取得了很大成绩。SYSU-CHINA于2021年成立的团队由来自生命科学学院、传播与设计学院、海洋工程学院及医学院的学生组成。让我们看看成员有谁吧（下列名单排序不分先后：）。</line>
    `,

    attributions: `
    <title>贡献:</title>
<line>我们感到很荣幸能够有机会完成我们大部分计划中的工作，而不管是否受到疫情的影响。团队能够继续创意制作过程，包括干湿实验、hp工作以及wiki、视频等的设计。所做的工作都是基于许多团队的支持，许多成员都起到了重要的作用。详情如下。姓名按字母表顺序排列。</line>
<subtitle>头脑风暴:</subtitle>
  <line>Staring point: Nov. 2020: Bingnan Zhao, Jingyuan Bian, Sijun Li, Sisi Ying, Qing Dong, Wanling Chen, Xuming Zeng, Yating Yu, Zhiqin Chen</line>
  <line>PI: Rui Zhang, professor of School of Lifesciences</line>
  <line>Instructors: Rui Zhang, Xu Jing, professor of School of Lifesciences, etc.</line>
  <line>Student leaders: Bingnan Zhao, Sijun Li, Yating Yu</line>
  <line>Advisors: Jiaxue Chen</line>
<subtitle>项目：</subtitle>
<sectitle>1. 湿实验</sectitle>
<line>主要归功于：Bingnan Zhao, Jingyuan Bian, Xuming Zeng</line>
<line>所有团队成员都参与了湿实验室工作。</line>
<line>我们得到了张教授和徐教授的支持，以及几位大四学生，Tao Xu, Jiawen Yang, Weixing Zhang, Yicong Xu, Wenbing Yang, Hui Luo, Fujia Han, Ying Qiu, Yachao Zuo，他们提供了安全或技术培训，并提供了实验材料，并全程监督。</line>
<sectitle>2. 干实验</sectitle>
<line>主要归功于：Jialing Zou, Yating Yu, Zhiwei Wang, Bingnan Zhao，他们涵盖了大部分模型建立过程。</line>
<sectitle>3. hp</sectitle>
<line>Qing Dong负责人类实践的早期阶段。</line>
<line>不同大学和团队之间的交流主要由Bingnan Zhao, Xuming Zeng, Yating Yu完成。</line>
<line>Yining Huang在她的学校做了一些惠普的工作，并收集了我们wiki上列出的hp信息。</line>
<sectitle>4. 美工制作</sectitle>
<line>Wiki设计的主要功劳是Sijun Li, Sisi Ying, Yating Yu, Zhiqing Chen, Zhiwei Wang。我们的顾问：Jingjing Liang</line>
<line>推广视频的主要功劳是Wanling Chen, Zhiqing Chen。</line>
<line>在宣传视频的制作过程中，我们得到了团队顾问之一Jiaxue Chen的大力支持。Jiajun Ling为宣传视频配音。</line>
<line>演示视频的主要功劳是Jingyuan Bian, Wanling Chen, Yating Yu, Zhiqing Chen。</line>
<line>Jiajun Liang, Jiaxue Chen设计了团队标志和项目标志。</line>
<subtitle>团队：</subtitle>
<sectitle>1. 合作</sectitle>
<line>感谢ZJTU-CHINA, SCUT-CHINA, SYSU-Software,SCU-CHINA在与我们展开合作过程中对我们提供的支持和帮助</line>
<sectitle>2. 安全</sectitle>
<line>Bingnan Zhao, Jingyuan Bian, Xuming Zeng，在Hui Luo和导师Rui Zhang的指导下进行了监督。所有学生成员都参加编辑safety form。</line>
<subtitle>元件：</subtitle>
<sectitle>1.Contribution：</sectitle>
<line>Bingnan Zhao, Jingyuan Bian, Xuming Zeng</line>
<line>指导：Hui Luo</line>
<line>我们的注册号范围从BBa_K396001到BBa_K396017</line>
<sectitle>2.成功的Engineering及对现有元件的改进</sectitle>
<line>Bingnan Zhao, Jingyuan Bian</line>
<line>指导：Hui Luo</line>
<subtitle>团队训练：</subtitle>
<line>SYSU-China在高年级和下一代团队领导者之间的传承之中展现了自己的特点。从教科书和现场实践中获得了很强的合成生物学背景。这段旅程由三位领队点燃。</line>
<line>我们还获得了包括讲师在内的高年级学生的支持：Hui Luo</line>
<line>导师：张教授</line>
<subtitle>Acknowledgement:</subtitle>
<line>特别感谢徐教授，他为我们提供了继续进行湿实验室劳动的主要平台，以及我们的PI张教授和一些老师，他们在头脑风暴的早期阶段提供了组件，最终形成了这个想法。我们也将向我们的顾问致以诚挚的问候，其中陈佳雪、梁晶晶提供了急需的艺术支持，以及两位教授实验室的高年级学生的及时帮助，包括：Tao Xu, Jiawen Yang, Weixing Zhang, Yicong Xu, Wenbing Yang, Hui Luo, Fujia Han, Ying Qiu, Yachao Zuo，我们也感谢那些给我们提出有影响力的建议的人，包括Jianzhong Liu，我们学校的一名PI；Juesen Zhang是Rui Zhang实验室的一名应届毕业生，他让我们没有在蛋白质提取物上浪费太多时间。</line>
<line>此外，我们要感谢一些人，他们在我们学校外给予了我们善意的帮助。Yiqing Hao热心帮助我们参观VLAN生物科技，让我们更接近真正的工厂； Genshui Zhang是广州中医药大学的一位教授，他耐心地接受了我们的采访，并给了我们许多有用的指示。我们发送了我们的调查链接，以收集有关人们对生物燃料想法的信息。我们真心感谢那些花了宝贵时间参与我们调查的人。我们的引物从瑞科生物科技订购，DNA序列从擎科生物科技订购，测序服务也由瑞科生物科技提供。</line>
    `
}
