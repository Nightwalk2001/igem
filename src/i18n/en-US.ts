export const en = {
    home_tooltip: `back to the home page`,
    copy_text: `copy`,
    copy_tooltip: `copy to clipboard`,
    copy_notify: `Latex has been copied to the clipboard`,
    download_tooltip: `click to download the file`,
    video: `We recorded an education video to make people familiar with what is molecular scaffold and what we are doing`,
    software: `These are the software we used and the companies that ordered materials`,

    home1: `
<h>Origin</h>
<u>
<l>On the planet we live on,All kinds of materials, such as food, energy, medicine,All come from the processing and production conversion of raw materials</l>
<l>However, raw materials are limited</l>
<l>Therefore, improving the production efficiency of materials is particularly critical</l>
</u>
`,
    home2: `
    <h>Obstacle</h>
   <u>
   <l>At present, it is a popular method to produce materials by using various enzymes from organisms</l>
<l>But because of the Brownian motion of molecules,In the reaction system, enzymes are often scattered</l>
<l>Therefore, in the multi enzyme reaction step,It takes a lot of time to accurately find the enzyme in each step of the reaction</l>
<l>Then the reaction efficiency is affected</l>
</u>
`,
    home3: `
    <h>What we want to do</h>
<u>
<l>Therefore, we decided to use circRNA as a scaffold</l>
<l>Connect related enzymes together,To pulls the distance between the enzymes in each reaction step</l>
<l>Then improve reaction efficiency</l>
</u>
`,
    home4: `
    <h>Solution</h>
<u>
<l>So, Here comes our</l>
<l>CircRNA Assembly FacTory!</l>
</u>
`,

    subject_description: `Project Description`,
    abstract_description: `How and Why we chose CRAFT as our iGEM project`,
    subject_design: `Project Design`,
    abstract_design: `How we design our craft`,
    subject_contribution: `Contribution`,
    abstract_contribution: `Our useful contribution for future iGEM teams`,
    subject_safety: `Project Safety`,
    abstract_safety: `How can we ensure the safety of the experiment`,
    subject_proof: `Proof of Concept`,
    abstract_proof: `Design idea verification`,

    subject_parts: `Know Parts`,
    abstract_parts: `Introduction of our new parts and improvement of existing parts`,
    subject_engineering: `Know Engineering`,
    abstract_engineering: `Engineering success in a part of our project by going through at one iteration of the engineering design cycle`,

    subject_overview: `HP Overview`,
    abstract_overview: `Outline of what we have done`,
    subject_interga: `Integrated HP`,
    abstract_interga: `how our team responded to our human practices reflections, research, and engagement`,
    subject_collaborations: `HP Collaborations`,
    abstract_collaborations: `Our collaboration with SCU-CHINA, SCUT-China and SYSU-software`,
    subject_partnership: `HP Partnership`,
    abstract_partnership: `Our Collaboration throughout the year with SYSU-Software on a set of shared objectives related to both of our projects`,
    subject_implementation: `HP Implementation`,
    abstract_implementation: `How we would implement our project in the real world`,
    subject_communication: `HP Communication`,
    abstract_communication: `Develop and implement science communication related to synthetic biology`,
    subject_education: `HP Education`,
    abstract_education: `Develop and implement education related to synthetic biology`,

    subject_members: `Team Members`,
    abstract_members: `Our team members`,
    subject_attributions: `Project Attributions`,
    abstract_attributions: `What work our team members did and what other people did for our project`,

    description: `
    <title>Abstract</title>
<first>A successful artificial multi-enzyme reaction depends on finely choreographed interactions between diverse enzymes. However, efficacy of artificial multi-enzyme reactions is often restricted by large distances between enzymes, which results in low reaction rates. Cells employ subtle approaches to increase the rate of multi-enzyme reactions, such as forming multi-enzyme complexes. In our project, we used circular RNA as a backbone to aggregate enzymes we need in multi-enzyme reactions, based on the interaction between RNA and RNA-binding proteins, thus increasing the reaction efficiency. We noticed the effect of substrate diffusion on reaction efficiency in multi-enzyme reactions and develops a versatile platform to design multi-enzyme reactions based on Michaelis-Menten equation and Fick's law.The platform can calculate the required enzyme input according to the expected product output. Cellulose degradation is chosen to validate the feasibility of our design in the experiment, and our understanding of circRNA based multi-enzyme reactions will contribute to further exploration of more biological process.</first>
<title>Background</title>
<subtitle>Circular RNA</subtitle>
<line>Circular RNAs (circRNAs) are non-coding RNAs that have a covalently closed loop and no poly-adenylated tail. They are generated during RNA splicing and arise from exons, introns, or a combination of both. CircRNAs have been identified as naturally occurring RNAs that are highly represented in the eukaryotic transcriptome. Most circular RNA transcripts are generally expressed at low levels relative to their respective linear RNAs and some circRNAs have been reported to be expressed more abundantly than their linear counterparts. CircRNAs can act as a miRNA sponge to repress miRNA function, participate in splicing of target genes, translate genes into protein and interact with RNA binding proteins (RBPs) [1]. </line>
<photo>{photo1}</photo>
<note>Figure1. circular RNA</note>
<subtitle>RNA Binding Protein</subtitle>
<line>RNA-binding proteins are a class of proteins containing specific motifs that bind to specific RNAs and are widely involved in many intracellular biological processes, including gene transcription and translation, and interaction. Although current studies show that circRNAs mainly serve as the miRNA sponge to repress miRNA function, the interaction between circRNA and RBP is considered an important part of circRNA function [2]. </line>
<subtitle>Artificial multi-enzyme reactions</subtitle>
<line>To satisfy the needs of industrial production, many artificial multi-enzyme reactions have been designed. Aiming at enhancing the efficiency of desired reactions, researchers use various kinds of molecular building blocks to engineer scaffold for enzymes, including DNA, RNA and protein. Among three different kinds of scaffold, DNA has become the most programmable biomolecules given its high thermostability, predictable spatial properties, and reliability in pairing to complementary strands. In contrast, traditional RNA scaffolds are prone to be degraded by RNase and hydrolyzed, which restrict the application of RNA scaffold. However, in our project, the covalently closed loop of circRNA enables it to maintain in working environment, and the circular structure of our scaffold also enhance spatial predictability. The protein scaffolds offer diverse molecular structures that can effectively capsule enzymes, but the low spatial predictability restricts their uses[3].</line>
<title>Our Solutions</title>
<line>We have constructed a backbone of circular RNA and use a linker to connect the RNA-binding protein and our enzyme. When two enzymes of a multi-enzyme reaction co-localize in the circular RNA backbone, the product 1 produced in the first enzyme reaction will rapidly diffuse to places near the second enzyme and become a substrate for the second enzyme to produce product 2.</line>
<photo>{photo2}</photo>
<note>Figure2. two enzymes colocalize in circRNA scaffold</note>
<line>When we co-localize multiple enzymes on the circRNA backbone, the products in the multi-enzyme reaction can diffuse rapidly. Based on Fick's law, it can thereby increase the rate of the two-step sequential reaction and improving the yield of the product.</line>
<photo>{photo3}</photo>
<note>Figure3. many enzymes colocalize in circRNA scaffold</note>
<line>In order to achieve our goal, we tested the feasibility of our project both in model and experimental parts, respectively.</line>
<line>Before the experiments, we first predicted the dissociation constants of RBP from RNA under different reaction conditions based on the articles we reviewed, which led to a preliminary prediction of the efficiency of using RBP for multi-enzyme at a theoretical level. Besides, in order to make our project more helpful to others, we designed a<jump>platform</jump>that can predict the required amount of enzyme based on the desired product yield, and the parameters related to the multi-enzyme reaction, thus achieving efficient regulation of the multi-enzyme reaction.</line>
<line>In the experimental validation part,<link>split EGFP=>/project/proof</link>was chosen to validate our hypothesis, and the fluorescence emitted by the combination of two EGFP fragments verified the feasibility of our idea. In the next experiments, we chose two enzymes, CenA and BglA, for<link>cellulose degradation=>/project/design</link>to reduce cellulose to reduced oligodisaccharides, and different RBPs were chosen to test and confirm our idea.</line>
<title>Potential Applications</title>
<line>Our circRNA scaffold can effectively shorten the distance between different enzymes, thus improving the efficiency of multi-enzyme reactions. As we substantiated in the experimental part of cellulose degradation, and our circRNA assembly factory can be applied in industrial production to increase the output of new energy, such as ethanol. Moreover, our circRNA scaffold might also function in clinical treatment. In neurodegenerative diseases like Alzheimer's disease, which is associated with β-amyloid deposition, the circRNA backbone can be used for specific drug delivery or protein degradation.</line>
<title>The Impact of Epidemic</title>
<line>Just like 2020, this year our iGEM project also is affected by COVID-19. During summer vacation of 2021, the epidemic discourages us from going back to the lab. Also, we have faced various difficulties in successfully carrying out our experiments. Consequently, the time allowed us to finish our experiments is limited. Yet, during this period, we still explore to improve our projects through model refining and brainstorming. We met weekly online or offline with our team members and monthly with our PI to ensure our project move on steadily.</line>
<subtitle>References</subtitle>
<ref>[1] Du WW, Zhang C, Yang W, Yong T, Awan FM, Yang BB. Identifying and Characterizing circRNA-Protein Interaction. Theranostics. 2017;7(17):4183-4191. Published 2017 Sep 26. doi:10.7150/thno.21299</ref>
<ref>[2] Zang J, Lu D, Xu A. The interaction of circRNAs and RNA binding proteins: An important part of circRNA maintenance and function. J Neurosci Res. 2020;98(1):87-97. doi:10.1002/jnr.24356</ref>
<ref>[3] Tan YQ, Xue B, Yew WS. Genetically Encodable Scaffolds for Optimizing Enzyme Function. Molecules. 2021;26(5):1389. Published 2021 Mar 4. doi:10.3390/molecules26051389</ref>
    `,

    design: `
    <first>Designing a circRNA-based assembly factory is not that easy, but it isn't complicated either. This simple "factory" consists only two parts: the circRNA and the specific designed fusion protein. The circRNA acts as a factory that assembles the production machines (fusion proteins). Several fragments of the circRNA sequence will form stemloop structures which will provide the biding sites of RNA binding protein.</first>
<line>Similarly, we also need to modify the proteins. By fusing the RNA binding domain with the origin structure, the proteins obtain the ability to bind with specific stemloop of the RNA. That is, the circRNA scaffold is able to gather multiple fusion proteins. In a word, the circRNA and the fusion proteins bound to it form the basic building blocks of a circRNA-based assembly factory (Figure 1).</line>
<photo>{photo1}</photo>
<note>Figure 1. Pattern of circRNA scaffold: circRNA and fusion protein</note>
<line>More details need to be considered in our experiments. For example, how many production machines can be settled in a factory? (How many fusion proteins can be carried on a circRNA) How to determine the optimal distances between these machines? (The optimal interval sequence of two adjacent circRNA stemloops) Is this “factory” inside or outside the cell? (in vivo or in vitro experiments) ...... The answer to these questions are critical to the refinement of our project (Figure 2).</line>
<photo>{photo2}</photo>
<note>Figure 2. To construct an ideal circRNA scaffold: questions to be considered</note>
<line>Based on our design and the questions mentioned above, our experiments contained two parts - eukaryotic cells based intracellular experiments and extracellular experiments in prokaryotic cell cytoplasm (E. coli lysate). Both of the experiment were carried out independently, complementing with each other. We will cautiously consider the design of circRNAs and the selection of fusion proteins. </line>
<title>1 Eukaryon-based intracellular experiments</title>
<subtitle>1.1 CircRNA</subtitle>
<line>CircRNAs are common in eukaryotes, which implies the RNA circularization strategies may occur in these cells. Since circRNAs are lack of dissociative 3' and 5' ends, they are able to resist cleavage of RNA exonucleases and behave more stable compared to linear RNA molecules. </line>
<line>We conducted a series of RNA-related experiments in vitro, including DNA transcription and RNA cyclization. The cyclized RNA was obtained in vitro and subsequently transferred into Hek293 cells by Liposome 2000 reagent. Compared to in vivo circularization strategy, in vitro circularization is obviously more flexible. On the other hand, in vitro circularization will also encounter higher rate of RNA degradation because of RNase contamination.</line>
<line>The initially designed circRNA contain the binding two sites of MS2 and PP7. We empirically designed a 15nt internal sequence between the stemloops which may avoid mutual interference between two adjacent fusion proteins.</line>
<line>We designed a 10nt complementary sequence at the ends of the circularization site of the circRNA, which may be critical to facilitate circularization process. </line>
<line> We tried to avoid the formation of additional stem-loops by RNA secondary structure prediction (Figure 3).</line>
<photo>{photo3}</photo>
<note>Figure 3. Predictions of circRNA's secondary structure</note>
<subtitle>1.2 Fusion protein</subtitle>
<line>The other part of our experiment is about the selection of the fusion protein. We chose MS2 and PP7, two widely used RNA binding proteins as the adapter. In our in vivo confirmatory, we respectively fused them with the N-terminal of EGFP(1-158AAs) and the C-terminal of EGFP(159-238AAs). Fluorescent proteins have proven to be excellent reporters and biochemical sensors with a wide range of applications. In a split form, they are not fluorescent, but their fluorescence can be restored by supplementary protein–protein interactions that reassemble the split polypeptides. A fluorogenic chromophore can self-catalytically form within an isolated N-terminal fragment of the EGFP. The restoration of the split protein fluorescence can be driven by protein complementary interactions. The ability of the EGFP system to respond quickly to protein interaction can be useful for detecting the kinetics of many other types of pairwise interactions in living cells. We use western blot to detect the expression of two fusion proteins.</line>
<photo>{photo4}</photo>
<note>Figure 4. Schematic diagram of the principle of split EGFP </note>
<note>(A)Left: the circRNA do not exist in the system; (B)Right: The circRNA exists and the fluorescent can be seen.</note>
<title>2 Extracellular experiments in prokaryotic cell cytoplasm (E. coli lysate)</title>
<subtitle>2.1 CircRNA</subtitle>
<line>Expressing and purifying artificial circRNAs in prokaryotes remains a challenge. The fact that circRNAs are merely found in eukaryotes hints the possibility that prokaryotic cells are lack of RNA cyclizing strategies. As a result, we will still conduct the circularization in vitro. The cyclized RNA will be added directly to the sonication lysate of prokaryotes(E. coli), which can simulate the situation in prokaryotic cells and provide theoretical basis for the construction of cyclized RNA in prokaryotic cells in the future.</line>
<line>In fact, construction circRNAs in E. coli has already been achieved. José-Antonio Daròs has successfully constructed intron-assited (Figure 5), self-circularization vector and thus providing the platform for constructing artificial circRNA in prokaryotes (https://doi.org/10.1080/15476286.2021.1872962)</line>
<photo>{photo5}</photo>
<note>Figure 5. Using ELVd to design circular double strand RNA</note>
<line>Considering that longer circRNA molecule correspond with lower cyclizing efficiency, we shortened the circRNA to 69 bp. Only 10 bp of the internal sequence and necessary stemloops were retained. We also conducted secondary structure prediction to avoid unexpected secondary structure (Figure 6).</line>
<photo>{photo6}</photo>
<note>Figure 6: Secondary structure of the shortened circRNA: the stem loops of MS2 and PP7 are shown </note>
<subtitle>2.2 Selection of RNA binding protein (RBP)</subtitle>
<line>We selected the commonly used RBPs, mostly from E. coli or phage coat proteins. The number of amino acids are under 130 so that these small molecules will not interfere with the functional group of the enzymes fused with them. In addition, characteristics of their aptamers were well studied. For instance, the dissociation constant (Kd) of PP7 wild-type is only 1nM. (Table1)</line>
<photo>{photo7}</photo>
<note>Table 1 The dissociation constants of the designed PP7 operator variants for PP7 coat protein</note>
<line>In addition to MS2 and PP7, we have also ordered and cloned Qβ, λN, SLBP (from HEK293) to pET28a vectors with the help of gene synthesis companies, which provides an abundant toolbox for aptamer-RBP combinations on circRNA scaffolds. The selection of aptamer-RBP combinations with different affinities and molecular sizes may meet multiple experimental requirements. We will purify these RBPs and test their affinity (dissociation constants)  with aptamers in order to standardize the RBP elements.</line>
<subtitle>2.3 Fusion protein</subtitle>
<line>After completing the validation of the in vitro experiment, we wish to apply the RNA scaffold into practical application. CenA is an endo-glucanase that breaks down water-soluble cellulose into reduced oligo disaccharides. And BglA is a 6-phospho-beta-glucosidase, which can further turn the oligomeric disaccharide into glucose. That is, CenA and BglA can catalyze the conversion of cellulose to glucose through a two-step sequential enzymatic reaction (Figure 7). We also used western blot to detect the expression of both proteins. Then we cleaved the cells by ultrasound and obtain the lysate . Pre-constructed circRNA was added to the obtained lysate as the experiment group, while the other without circRNA was control group. The changes in glucose concentration were detected by spectrophotometer as a way to verify whether the cyclic RNA elements could serve to improve the reaction efficiency.</line>
<photo>{photo8}</photo>
<note>Figure 8. Two-step sequential enzymatic reaction catalyzed by CenA and BglA</note>
<line>The circRNA scaffold can shorten the distance between two adjacent enzymes, improving the efficiency of this consecutive reactions. In our experiments, the circRNA scaffolds bring CenA and BglA closer so that the oligosaccharide (product of CenA) quickly spread into the active center of BglA and was subsequently converted into glucose. Compared with the natural condition, the presence of circRNA scaffolds change the way how these enzymes are organized (Figure8), thus speeding up the efficiency of multi-step continuous enzymatic reactions.</line>
<photo>{photo9}</photo>
<note>Figure 9. CircRNA shorten the distance between two enzymes</note>
<line>CenA and BglA were respectively fused with MS2 and PP7 in E. coli BL21a. We also used western blot to detect the expression of both proteins. Then we cleaved the cells by ultrasound and obtain the lysate . Pre-constructed circRNA was added to the obtained lysate as the experiment group, while the other without circRNA was control group. The changes in glucose concentration were detected by spectrophotometer as a way to verify whether the cyclic RNA elements could serve to improve the reaction efficiency.</line>
<line>The circRNA ciRS-7 with at least 70 binding sites for miR-7 acts as molecular sponges. Inspired by this, we wish to design multiple protein-binding stemloops on our circRNA as a way to achieve higher binding efficiency (Figure 9). Limited by the efficiency of RNA in vitro circularization, we are unable to achieve that. We hope to provide such ingenious designs for future iGEMers. If such an idea really becomes reality someday in the future, it will create more possibilities for synthetic biology.</line>
<photo>{photo10}</photo>
<note>Figure 10. Multiple RBP binding sites on a single circRNA molecule</note>
<subtitle>References:</subtitle>
<ref>[1] Breuer J , Rossbach O . Production and Purification of Artificial Circular RNA Sponges for Application in Molecular Biology and Medicine[J]. Methods and Protocols, 3(2).</ref>
<ref>
[2] Demidov V V , Dokholyan N V , et al. Fast complementation of split fluorescent protein triggered by DNA hybridization[J]. Proc Natl Acad Sci U S A, 2006, 103(7):2052-2056.
</ref>
<ref>
[3] Wang, J., et al., 3dRNAscore: a distance and torsion angle dependent evaluation function of 3D RNA structures. Nucleic Acids Res, 2015. 43(10): p. e63.
</ref>
<ref>
[4] Waterhouse, A., Bertoni, M., Bienert, S., Studer, G., Tauriello, G., Gumienny, R., Heer, F.T., de Beer, T.A.P., Rempfer, C., Bordoli, L., Lepore, R., Schwede, T. SWISS-MODEL: homology modelling of protein structures and complexes. Nucleic Acids Res. 46(W1), W296-W303 (2018).
</ref>
<ref>
[5] Teresa, Cordero, et al. Large-scale Production of Recombinant RNAs on a Circular Scaffold Using a Viroid-derived System in Escherichia coli.[J]. Journal of Visualized Experiments Jove, 2018.
</ref>
<ref>
[6] Beltrán Ortolá, Cordero T , Hu X , et al. Intron-assisted, viroid-based production of insecticidal circular double-stranded RNA in Escherichia coli. 2020.
</ref>
<ref>
[7] Delebecque C J , AB Lindner, Silver P A , et al. Organization of Intracellular Reactions with Rationally Designed RNA Assemblies[J]. Science, 2011, 333(6041):470-4.
</ref>
<ref>
[8] Litke J L , Jaffrey S R . Highly efficient expression of circular RNA aptamers in cells using autocatalytic transcripts[J]. Nature Biotechnology.
</ref>
    `,

    contribution: `
    <title>New documents </title>
<first>We uploaded the 3D structure of CenA (<open>BBa_K118023=>http://parts.igem.org/Part:BBa_K118023</open>) by using homologous modeling, which provides a visual impression for this widely used enzyme.</first>
<line>We added a series of new documents on part <open>BBa_K313010=>http://parts.igem.org/Part:BBa_K313010</open> (loading sequence of RNA phage MS2). By using RNAfold, we predicted the secondary structure of the circRNA containing the MS2 binding site. The optimal secondary structure and the centroid secondary structure is shown on the part page. We also predicted the 3D structure of the circRNA with the help of xiaolab (https://xiao.lab.asu.edu/). This may provide a usable circRNA sequence for future iGEMers. </line>
<line>We supplemented the mechanism of MS2 binding on specific RNA binding site according the previous research. We provided the origin article that used split EGFP  to detect the protein interaction on RNA molecular.</line>
<title>New parts</title>
<line>We uploaded parts <open>BBa_K3960001=>http://parts.igem.org/Part:BBa_K3960001</open> to <open>BBa_K3960006 =>http://parts.igem.org/Part:BBa_K3960006</open>that respectively encodes proteins MS2，pp7, Qβ,SLBP and λN. These basic parts are commonly used RNA binding proteins (RBPs) that maybe helpful for future iGEMers. We also uploaded the corresponding RNA binding sequence <open>BBa_K3960006=>http://parts.igem.org/Part:BBa_K3960006 </open>to <open>BBa_K39600010=>http://parts.igem.org/Part:BBa_K3960010</open> which show the stemloop for RBPs binding. (The binding sites of MS2 and PP7 will be shown on part <open>BBa_K3960016=>http://parts.igem.org/Part:BBa_K3960016</open> and <open>BBa_K3960017=>http://parts.igem.org/Part:BBa_K3960017</open> )</line>
<line>We also fused MS2 with the N-terminal of EGFP(1-158AAs) and PP7 with C-terminal of EGFP (159-238AAs) respectively(<open>BBa_K3960011=>http://parts.igem.org/Part:BBa_K3960011</open>and <open>BBa_K3960012=> http://parts.igem.org/Part:BBa_K3960012</open>). Both of the two recombinant proteins use 12AAs flexible linker to connect two separated functional domains. These two component parts will be useful for detecting the interaction between two RBPs(MS2 and PP7) on a single RNA scaffold. The MS2 and PP7 are respectively replaced by optimized_CenA and BglA in component parts <open>BBa_K3960014=>http://parts.igem.org/Part:BBa_K3960014</open> and <open>BBa_K3960015=>http://parts.igem.org/Part:BBa_K3960015</open>. These two component parts are used to detect the efficiency of cellulose degradation in our in vitro  experiment. They may be useful for other RNA scaffolds that contain MS2 and PP7 binding sites. </line>
<line><open>BBa_K3960016=>http://parts.igem.org/Part:BBa_K3960016</open>and <open>BBa_K3960017=>http://parts.igem.org/Part:BBa_K3960017</open> are sequences of two different circRNA scaffolds. The circRNA scaffold1(BBa_K3960016) has 15bp internal sequence between two RBP biding sites while the circRNA scaffold2(BBa_K3960017) has only 10bp internal sequence. Both RNA sequence were synthesized by in vitro transcription and the liner RNAs were both modified by  5’-monophosphate, which is a critical step for circularization.</line>
<title>Trouble shooting</title>
<line>We are glad to share our experience about construction of circRNA with future iGEMers. There are several reasons that possibly lead to unsuccessful circularization of circRNA. </line>
<line>To begin with, the T4 RNA ligase only recognizes the 5’-monophosphate modified liner RNAs. After the in vitro transcription, most of the liner RNA products should be modified with  5’-monophosphate, otherwise they won’t be cyclized by T4 RNA ligase. It is recommended that 10-fold GMP should be added before the in vitro transcription. The GMP‐initiated in vitro transcription aims to obtain mainly 5´‐monophosphorylated linear RNA transcripts which can be directly used for RNA circularization. Since all T7 polymerase‐created in vitro transcripts start with three guanosines, a stochastic subset of RNAs will be initiated with GMP instead of GTP. Assuming the active centre of the RNA‐polymerase accepts GMP and GTP with the same affinity, transcription with 10‐fold excess of GMP results in a mixture of total transcripts consisting of 90% monophosphate 5´ends. Besides, RNA 5' Pyrophosphohydrolase (RppH) can be used to remove pyrophosphate from the 5´ end of triphosphorylated RNA to leave a 5´ monophosphate RNA. Moreover, the RNA can be treated first with CIP to remove the triphosphate, and then with a kinase, to add a single phosphate. Fragments containing these 5’ monophosphates can be ligated by T4 RNA ligase. Ordering oligo liner RNA (less than 80bp) with 5’ monophosphate from biotechnology company is also a worth considering method. </line>
<line>In addition, RNA secondary structure shielding the ends can inhibit ligation. Addition of DMSO to 10% (v/v) can increase ligation in these cases.</line>
<line>Last but not least, RNase pollution should be cautiously noticed during the experiment. RNase Zap can be used to prevent the pollution.</line>
<subtitle>References</subtitle>
<ref>[1] Breuer J , Rossbach O . Production and Purification of Artificial Circular RNA Sponges for Application in Molecular Biology and Medicine[J]. Methods and Protocols, 3(2).</ref>
<ref>[2] Demidov V V , Dokholyan N V , et al. Fast complementation of split fluorescent protein triggered by DNA hybridization[J]. Proc Natl Acad Sci U S A, 2006, 103(7):2052-2056.</ref>
<ref>[3] Wang, J., et al., 3dRNAscore: a distance and torsion angle dependent evaluation function of 3D RNA structures. Nucleic Acids Res, 2015. 43(10): p. e63.</ref>
<ref>[4] Waterhouse, A., Bertoni, M., Bienert, S., Studer, G., Tauriello, G., Gumienny, R., Heer, F.T., de Beer, T.A.P., Rempfer, C., Bordoli, L., Lepore, R., Schwede, T. SWISS-MODEL: homology modelling of protein structures and complexes. Nucleic Acids Res. 46(W1), W296-W303 (2018).</ref>

    `,

    safety: `
    <title>Overview</title>
<first>Safety is the paramount issue in synthetic biology today. We, members of SYSU-CHINA, strictly abide by the safety rules of IGEM competition and relevant regulations of China. Safety and ethical issues have always been considered in our project from the design stage to the experiment stage. After we understand the risks, the safety form is accessible.</first>
<title>Laboratory safety</title>
<line>We take lab safety very seriously. Most of us have never done these molecular biology experiment operations before, but under the guidance of PI, we mastered the experimental operation in batches. Each member's operation has been examined when conducting dangerous experiments such as electrophoresis.</line>
<line>Security protocol of the lab has been well signed.</line>
<line>The instruments used in the experiment such as centrifuge, water bath and electrophoresis tank are all operated under human supervision.</line>
<photo>{photo1}</photo>
<note>Figure 1 Experimental Area</note>
<photo>{photo2}</photo>
<note>Figure 2 gloves and lab clothes we wear in the laboratory</note>
<line>When doing the electrophoresis, Gene Green, which is much safer replaces EB as a nucleic acid dye. </line>
<photo>{photo3}</photo>
<note>Figure 3 dye</note>
<line>Toxic reagent such as TEMED was used in the fume hood.</line>
<line>Operations of cellular level were carried out in the corresponding clean benches.</line>
<photo>{photo4}</photo>
<note>Figure 4 clean benches</note>
<line>In addition, we have a strict separation of contaminated and non-contaminated areas in the lab.</line>
<photo>{photo5}</photo>
<note>Figure 5 Distinction between polluted and non polluted areas</note>
<title>Project design safety</title>
<line>In the project design, we used three chassis organisms, DH5α(E.coli) BL21(E.coli) and HEK293. We never take them out of the lab and we disinfect it with ethanol before discarding the bacteria. We submitted the<link>parts=>/parts/parts</link>used in the experiment. Due to our safety awareness, engineered bacteria will not cause harm to humans and the environment.</line>
<line>Our project can provide a new platform for balancing food resources and chemical resources. To avoid potential hazards, we hope the resources that are produced in this way to be used in industry and to be kept away from the public as much as possible. Industrial production must take place in specialized factory.</line>
<title>Epidemic prevention</title>
<line>Given the COVID-19 pandemic, we attach great importance to epidemic prevention and control when conducting our projects. We actively respond to the epidemic prevention and control measures of the university. Each of us adheres to daily health declaration and disinfects public areas frequently. Thanks to our joint efforts, the epidemic has not got worse because of our activities.</line>
    `,

    proof: `
      <title> Proof of concept </title>
<first>Our goal is to use circRNA as molecular scaffold to colocalization enzymes to accelerate their reaction rate. For the proof of concept, we planed to perform split EGFP, which is an usual method to detect protein-protein interaction. If we can demonstrate that two EGFP fragments can be dragged to each other through the interaction between RNA aptamer and RNA binding proteins, which are linked to the fragments, then we can say that our concept can be proved. The mechanism lists below:</first>
<photo>{photo1}</photo>
<note>Figure 1.mechanism of split EGFP</note>
<line>EGFP splits into to part: EGFP-N and EGFP-C. EGFP-N is fused to MS2 while EGFP-C is fused to PP7, respectively. There are MS2 aptamer and PP7 aptamer on our circRNA scaffold, which have a 10nt length spacer. After the binding of two RBPs, their fused EGFP fragments can be dragged closer and form a complete EGFP. Then we can perform FCM(flow cytometry) to detect brightness.</line>
<line>Our experiment included four groups, which are positive control(only transfected with plasmid which can express EGFP), negative control(transfected with nothing), experimental group(transfected with plasmids that can express EGFP-N-MS2 and EGFP-C-PP7 and circRNA scaffold 2), false positive group(transfected with plasmids that can express EGFP-N-MS2 and EGFP-C-PP7 but no circRNA), respectively. The results are as follows:</line>
<photo>{photo2}</photo>
<note>Figure 2.positive control</note>
<photo>{photo3}</photo>
<note>Figure 3.negative control</note>
<photo>{photo4}</photo>
<note>Figure 4.co-transfection with circRNA scaffold</note>
<photo>{photo5}</photo>
<note>Figure 5.co-transfection without circRNA scaffold</note>
<line>Result shows that the brightness of group4 is between group1 and group2, which conforms to our design. Brightness of group3 is as low as group1, indicating that no false positive effect are interfering our result. All in all, this split EGFP proves that our circRNA scaffold do work.</line>
<line>Upon above results, we completed the proof of concept of our project. We will try to apply our product into some practical areas.</line>
    `,

    model_overview: `
    <first>As described on the project page, our experimental design mainly includes three key points: circrna, fusion protein and multi enzyme reaction.</first>
<line>Therefore, the productivity of circRNA, the proportion of fusion protein bound to the circRNA scaffold and the effect of enzyme distance on improving the reaction rate in multi enzyme reaction are important factors to verify the efficacy of our circRNA scaffold.</line>
<line>Therefore, our model mainly forecasts and analyzes the above aspects</line>
    `,
    model_rna: `
<title>the productivity of circRNA</title>
<line>The construction of circRNA can be divided into two major steps: transcription and cyclization. According to the papers we have consulted, we further refine the two steps, quantify the refined steps by formulas, and further obtain the way to measure the reaction efficiency of the two steps.</line>
<subtitle>For transcription:</subtitle>
<line>For the transcription process, we refine it into two steps: initiation and extension.</line>
<line>In the initial process, because we used T7 RNA polymerase (T7RNAP), most of its promoters were started by two GTPs, and the binding of the two GTPs was also accompanied by changes in conformation. Yiping Jia and smita S. Patel pointed out that there were two conformational changes in the binding of GTP to ED complex. A fast reversible step was observed in the binding of one GTP, and a slow almost irreversible step occurred after the binding of two GTP molecules. We are concerned about this slow irreversible step because it affects the rate of initiation to a greater extent. This process does not conform to the hyperbolic curve, but it conforms to the solution of double GTP binding reaction.</line>
{formula1}
<line>Where (E · d) n represents polymerase promoter DNA complexes with different conformations, and its dependence on GTP is applicable to the hyperbolic equation:</line>
{formula2}
<line>Therefore, we can know:Kd=320μM;k+=7±0.2s-1;k-=0.13±0.1s-1;[1]</line>
<line>In the extension process, the kinetic parameters of T7RNAP adding NTP correctly at a single time are as follows.[2]</line>
<photo>{photo1}</photo>
<note>Table 1 Kinetic parameters of correct addition of NTP to T7RNAP at a single time</note>
<line>The kinetic pathway of single nucleotide incorporation during transcription extension is</line>
{formula3}
<line>KD is the equilibrium dissociation constant of NTP and kpol is the maximum rate constant of NMP incorporation. [3]</line>
<subtitle>For cyclization:</subtitle>
<line>We used T4RNA ligase 2 to catalyze the cyclization process.</line>
<line>The reaction of t4rna ligase has three steps. In the first step, rnl2 reacts with ATP in the absence of nucleic acid to form rnl2 - (lysyl-n ζ)- Amp intermediate and releases hot phosphate. In step 2, rnl2 amp binds to the missing dinuclear acid and transfers adenylate to the 5 '- PO4 - end to form an adenosylated missing intermediate. In step 3, rnl2 directs the attack on 3' - oh on the 5 '- phosphoanhydride bond, resulting in the release of repaired 3' - 5 'diester phosphate and AMP.</line>
<line>In the paper we consulted, the author used a rapid mixing quenching device to react in milliseconds, quantified the intermediate products and sealing products, plotted their distribution curve with time with MATLAB, calculated the rates of the second and third steps, and obtained the following figure. [4]</line>
<line>Taking this as a reference, we can know the rates of step 2 and step 3 according to our cyclized RNA sequence.</line>
<photo>{photo2}</photo>
<note>Figure 1 rate parameters in cyclization step</note>

<line>Based on the above information, in theory, we can quantitatively analyze and predict the efficiency of obtaining circrna. However, due to the limited time and conditions, we can not actually verify the above formula.</line>
<line>However, considering that other teams may be interested in this research in the future, we still sort out the information we have consulted and put it on our wiki for the reference of the teams that may be used in the future.</line>
    `,
    model_protein: `
    <title>the proportion of fusion protein bound to the circRNA scaffold</title>
<subtitle>1 Dissociation constant</subtitle>
<line>In our design, the binding efficiency between RNA binding protein (RBP) and RNA is an important factor to determine the results, and the quantitative index of binding efficiency is the dissociation constant.</line>
<line>In order to verify the feasibility of our idea, we use the reaction rate constant, combined with the relationship between the luminous intensity of fluorescent dyes and RNA concentration, to obtain the dissociation constants of different RBPs under different reaction conditions, and then verify the effect of RBP.</line>
<line>If the binding process between RBP and RNA is regarded as a reversible reaction, the reaction equation can be assumed to be：（R：RNA；P：RNA binding protein；k：rate constant）</line>
{formula1}
<line>Forward rate：（kon：Forward rate constant；koff：Reverse rate constant；Rf：Free RNA concentration；Pf：Free protein concentration；Rt：Total RNA concentration；Pt：Total added protein concentration）</line>
{formula2}
<line>Easy to know：</line>
{formula3}
<line>The formula can change to：</line>
{formula4}
<line>Substitute the above formula to get：</line>
{formula5}
<line>Using calculus can get：</line>
{formula6}
<line>The relationship between fluorescence intensity and concentration is as follows：（Fluorescence quantitative PCR）</line>
{formula7}
<line>The dissociation constant can be obtained by substituting the known quantity into the integral according to the experimental data：</line>
{formula8}
<line>However, due to the limited experimental time, we were unable to carry out experimental verification of the above formula, which was shown for reference to the follow-up team.</line>
<subtitle>2 Prediction of the optimal amount of fusion protein input</subtitle>
<line>In the reaction process, due to the different dissociation constants between RNA binding protein and RNA, the different catalytic efficiency of different enzymes and the diffusion of substrates between different enzymes. Therefore, the difference in the amount of fusion protein in the input system will also indirectly affect the yield of the end product by affecting the above factors.</line>
<line>In order to obtain the best yield while saving resources as much as possible, we decided to analyze and predict the optimal amount of fusion protein. And thus build a platform to directly obtain the optimal amount of input protein by inputting some relevant data.</line>
<line>Platform display：</line>
{form}
<note>Michaelis constant、Maximum reaction rate、Equilibrium constant and rbp dissociation constant should be divided by ",", and the count should equal to channel</note>
<subtitle>Principle introduction：</subtitle>
<line>For the first step reaction, the most ideal situation is that the substrate can be completely transformed within the expected reaction time t, that is, the reaction equilibrium can be reached：（S0：Initial substrate concentration；S1：Concentration of substrate after the first enzyme reaction；K1：Equilibrium constant of the first step reaction）</line>
{formula9}
<line>Here, in order to facilitate the calculation, we make assumptions：</line>
<line>Hypothesis 1: the change of enzyme catalytic reaction rate caused by the decrease of substrate concentration in the reaction process is ignored.</line>
<line>Thus easy to obtain：（n1：Input of the first enzyme；t：Estimated reaction time；Vm1：Reaction rate of the first enzyme at initial substrate concentration）</line>
{formula10}
<line>For the second enzyme, the same can be obtained：（S2：Concentration of substrate after the second enzyme reaction；n2：Input amount of the second enzyme；Vm2：Reaction rate of the second enzyme at S2 concentration；K2：Equilibrium constant of the second step reaction）</line>
{formula11}
<line>Where Vm1 and vm2 can be calculated from Michaelis equation:</line>
{formula12}
<line>Considering that RBP and RNA are not 100% bound, there is a dissociation equilibrium:</line>
{formula13}
<line>Therefore, the dissociation constant was used to modify the enzyme input：</line>
{formula14}
<line>In addition, considering the factors of substrate diffusion, S1 in formula (6) is actually different from that in formula (3). Therefore, we also correct the concentration according to Fick's first law. See module 3 for the specific correction principle, which is not detailed here.</line>
<line>So far, considering all the above calculation processes and using Python for calculation, we can make a platform that can directly output the optimal input of the required enzyme depending on the input.</line>
    `,
    model_enzyme: `
    <title>Effect of enzyme distance on increasing reaction rate</title>
<subtitle>1 General calculation using Fick's first law</subtitle>
<line>When the substrate diffuses between different enzymes, the distance between enzymes will affect the reaction rate because the substrate concentration will change with the distance.</line>
<line>Fick's law was proposed by Adolf Fick in 1855. It is a law describing the relationship between diffusion flux and concentration gradient in the process of molecular diffusion.</line>
<line>Therefore, in order to verify whether our idea of reducing the distance between enzymes to improve the product yield per unit time is feasible, we used Fick's first law to quantitatively analyze the relationship between the distance between enzymes and the reaction rate。</line>
<line>Fick's first law is known to be：</line>
{formula1}
<line>By combining the above formula with our experimental design, the variant can be obtained：（J' is a constant；t：Diffusion time；C0：Pre diffusion concentration；C1：Concentration after diffusion；x：Diffusion distance）</line>
{formula2}
<line>Then can get：</line>
{formula3}
<line>Thus, when the initial diffusion concentration is fixed, the concentration after diffusion under different diffusion time and distance can be obtained. It can be seen that when the diffusion time is the same, the smaller the distance between enzymes (i.e. the smaller the diffusion distance), the higher the substrate concentration of the enzyme reaching the next reaction, which is more conducive to the improvement of yield.</line>
{chart}
<subtitle>2 Dynamic simulation of cellulose hydrolysis process</subtitle>
<line>In our experimental design, we intend to use two enzymes (endonuclease and glucosidase) used in the process of cellulose hydrolysis to verify our idea.</line>
<line>In order to theoretically explore the effect of reducing enzyme spacing on reaction efficiency, we made a dynamic simulation of cellulose hydrolysis process inspired by team Edinburgh in 2011. We use two dots to represent the two enzymes we use, and the long strip pattern represents cellulose. By setting the enzyme spacing at a fixed value, the difference between cellulose hydrolysis rate and enzyme spacing in the same time was explored.</line>
<line>The results are as follows:</line>
{canvas2D}
<line>From the results, we can see that when the enzyme spacing is limited in a certain range, the efficiency of cellulose hydrolysis is significantly higher than that when the enzyme spacing is not limited. At the same time, the smaller the enzyme spacing, the higher the hydrolysis efficiency.</line>
<line>However, at the same time, we also found an interesting phenomenon. When the limited value of enzyme spacing exceeds a certain distance (such as 6 set in this simulation), the catalytic efficiency for the initial period of time is basically close to the unlimited distance, and there is a significant difference in efficiency only after the initial period of time. It shows that it is also important to control the appropriate distance when pulling in the enzyme spacing. The distance must be pulled to a certain extent in order to effectively improve the efficiency.</line>
    `,
    model_structure: `
<title>Spatial structure prediction</title>
<line>The following three-dimensional structure diagrams are all drawn using three.js (the most famous JavaScript 3D library, using WebGL to render graphics, it can be said that it is D3.js in the 3D field), reading the pdb file obtained by the structure prediction, according to each Atom positions and chemical bonds render a three-dimensional model of the molecule.</line>
<subtitle>circRNA</subtitle>
<line>Predict by：RNAComposer</line>
{rna}
<note>Structure1: circRNA</note>
<line>The circRNA we used in the experimental verification contains two protein binding sequences (PBS) MS2 and PP7, that is, theoretically, two stem rings will be formed. We put our circRNA sequence into RNAcomposer for prediction, and obtained the results shown in the figure above. The structure of the two stem rings can be clearly seen from the figure. Our stem ring was not affected by three-dimensional folding. It is feasible at least in binding to the fusion protein.</line>
<subtitle>Fusion Protein</subtitle>
{protein1}
<note>Structure2: cenA-MS2</note>
{protein2}
<note>Sturcture3: bglA-PP7</note>
<line>In order to confirm whether the fused protein can present an ideal state, we asked SYSU-software (the team involved in protein structure prediction in this year's project) to help us predict the structure of our fusion protein.</line>
<line>We predicted the structure of two fusion proteins, in which cenA is our cellulose endonuclease and bglA is a glucosidase. We fused them with our RNA binding protein (RBP) to enable them to bind to our circRNA framework.</line>
<line>It can be seen from the prediction results that the two fused proteins can be clearly distinguished and do not interfere with each other, among them, cenA and bglA with large molecular weight and MS2 and PP7 with small molecular weight. It is consistent with our ideal prediction results, which further supports our experimental design</line>
<subtitle>References :</subtitle>
<ref>[1].\tJia, Y. and S.S. Patel, Kinetic Mechanism of GTP Binding and RNA Synthesis during Transcription Initiation by Bacteriophage T7 RNA Polymerase. The Journal of biological chemistry, 1997. 272(48): p. 30147-30153.</ref>
<ref>[2].\tTang, G., V.S. Anand and S.S. Patel, Fluorescence-Based Assay to Measure the Real-time Kinetics of Nucleotide Incorporation during Transcription Elongation. Journal of Molecular Biology, 2011. 405(3): p. 666-678.</ref>
<ref>[3].\tAnand, V.S. and S.S. Patel, Transient State Kinetics of Transcription Elongation by T7 RNA Polymerase. Journal of Biological Chemistry, 2006. 281(47): p. 35677-35685.</ref>
<ref>[4].\tChauleau, M. and S. Shuman, Kinetic mechanism of nick sealing by T4 RNA ligase 2 and effects of 3'-OH base mispairs and damaged base lesions. RNA, 2013. 19(12): p. 1840-1847.</ref>
    `,

    parts: `
    <title>Update parts </title>
<first>Based on the existing part BBa_K118023 (coding sequence of cenA), we updated the sequence by coden optimization. CenA is an endo-glucanase (Endo-1,4-beta-glucanase A) that breaks down water-soluble cellulose into reduced oligo disaccharides. This enzyme plays a critical role during the process of cellulose degradation. Thus, we updated a new part BBa_K3960013 (coding sequence of cenA_optimized ). The rate of expression is believed to be improved by coden optimization. </first>
<title>New parts</title>
<line>We uploaded parts BBa_K3960001 to BBa_K3960006 that respectively encodes proteins MS2，pp7, Qβ,SLBP and λN. These basic parts are commonly used RNA binding proteins (RBPs) that maybe helpful for future iGEMers. We also uploaded the corresponding RNA binding sequence BBa_K3960006 to BBa_K39600010 which show the stemloop for RBPs binding. (The binding sites of MS2 and PP7 will be shown on part BBa_K3960016 and BBa_K3960017 )</line>
<line>We also fused MS2 with the N-terminal of EGFP(1-158AAs) and PP7 with C-terminal of EGFP (159-238AAs) respectively(BBa_K3960011 and BBa_K3960012). Both of the two recombinant proteins use 12AAs flexible linker to connect two separated functional domains. These two component parts will be useful for detecting the interaction between two RBPs(MS2 and PP7) on a single RNA scaffold. The MS2 and PP7 are respectively replaced by optimized_CenA and BglA in component parts BBa_K3960014 and BBa_K3960015. These two component parts are used to detect the efficiency of cellulose degradation in our in vitro  experiment. They may be useful for other RNA scaffolds that contain MS2 and PP7 binding sites. </line>
<line>BBa_K3960016 and BBa_K3960017 are sequences of two different circRNA scaffolds. The circRNA scaffold1(BBa_K3960016) has 15bp internal sequence between two RBP biding sites while the circRNA scaffold2(BBa_K3960017) has only 10bp internal sequence. Both RNA sequence were synthesized by in vitro transcription and the liner RNAs were both modified by  5'-monophosphate, which is a critical step for circularization.</line>
    `,

    engineering_overview: `
    <title>Overview</title>
<first>Every step of our project follows the Design-Build-Test-Learn (DBTL) cycle, which is one of the major ideas of iGEM. Due to the further spread of COVID-19, our work was restricted throughout the year. The present situation requires more effort and more extensive learning. It took us about four months to construct the basic idea of our project, and five months to build and validate it. Our work was mainly divided into two parts, respectively proceeded in dry lab and wet lab. Both of the experiments were carried out independently, complementing with each other. The whole process of our engineering is as follow. </first>
<line>Taking inspiration from the cellulosome in some types of bacteria, we attempted to improve the hydrolysis efficiency of cellulase by shortening the distance between several hydrolases. We selected three key enzymes, including endo-1,4-β-D-glucanase(EG), exo-1,4-β-D-glucanase(CBH) and β-1,4-glucosidase(BG). We simulated this process in the<link>dry laboratory.=>/model</link></line>
<line>Based on the relatively stable properties of circRNAs, we constructed cellulase reaction system using it as the scaffold. To enable the enzyme to be fixed to the scaffold, we plan to fusion express the enzyme with the RBP through a linker. Considering the differences of properties and Kd, we chose MS2 and PP7 as our adapter RBPs. Once the cellulase system is proven to be practical, this model will be extended to other multienzyme metabolic pathways.</line>
<line>We planned to validate our system in both eukaryotic and prokaryotic cells. In eukaryotic systems, Split-EGFP, a common protein for molecular experiments, can directly show the interaction between protein and RNA.</line>
<line>Based on the success of EGFP division experiment, we planned to transfer the cellulase system into E. coli. There is a natural barrier between enzymes and cellulose, the cell membrane, so we conduct ultrasonic lysis of cells for vitro verification.</line>`,
    engineering_design: `
    <title>Design</title>
<line>Designing a circRNA-based assembly factory is not that easy, but it isn’t complicated either. This simple "factory" consists only two parts: the circRNA and the specific designed fusion protein. The circRNA acts as a factory that assembles the production machines (fusion proteins). Several fragments of the circRNA sequence will form stemloop structures which will provide the biding sites of RNA binding protein.</line>
<line>Similarly, we also need to modify the proteins. By fusing the RNA binding domain with the origin structure, the proteins obtain the ability to bind with specific stemloop of the RNA. That is, the circRNA scaffold is able to gather multiple fusion proteins. In a word, the circRNA and the fusion proteins bound to it form the basic building blocks of a circRNA-based assembly factory (Figure 1).</line>
<photo>{photo1}</photo>
<note>Figure 1. Pattern of circRNA scaffold: circRNA and fusion protein</note>
<line>More details need to be considered in our experiments. For example, how many production machines can be settled in a factory? (How many fusion proteins can be carried on a circRNA) How to determine the optimal distances between these machines? (The optimal interval sequence of two adjacent circRNA stemloops) Is this “factory” inside or outside the cell? (in vivo or in vitro experiments) ...... The answer to these questions are critical to the refinement of our project (Figure 2).</line>
<photo>{photo2}</photo>
<note>Figure 2. To construct an ideal circRNA scaffold: questions to be considered</note>
<line>Based on our design and the questions mentioned above, our experiments contained two parts - eukaryotic cells based intracellular experiments and extracellular experiments in prokaryotic cell cytoplasm (E. coli lysate). Both of the experiment were carried out independently, complementing with each other. We will cautiously consider the design of circRNAs and the selection of fusion proteins. </line>
<subtitle>1 Eukaryon-based intracellular experiments</subtitle>
<sectitle>1.1 CircRNA</sectitle>
<line>CircRNAs are common in eukaryotes, which implies the RNA circularization strategies may occur in these cells. Since circRNAs are lack of dissociative 3' and 5' ends, they are able to resist cleavage of RNA exonucleases and behave more stable compared to linear RNA molecules. </line>
<line>We conducted a series of RNA-related experiments in vitro, including DNA transcription and RNA cyclization. The cyclized RNA was obtained in vitro and subsequently transferred into Hek293 cells by Liposome 2000 reagent. Compared to in vivo circularization strategy, in vitro circularization is obviously more flexible. On the other hand, in vitro circularization will also encounter higher rate of RNA degradation because of RNase contamination.</line>
<line>The initially designed circRNA contain the binding two sites of MS2 and PP7. We empirically designed a 15nt internal sequence between the stemloops which may avoid mutual interference between two adjacent fusion proteins.</line>
<line>We designed a 10nt complementary sequence at the ends of the circularization site of the circRNA, which may be critical to facilitate circularization process. </line>
<line> We tried to avoid the formation of additional stem-loops by RNA secondary structure prediction (Figure 3).</line>
<photo>{photo3}</photo>
<note>Figure 3. Predictions of circRNA’s secondary structure</note>
<sectitle>1.2 Fusion protein</sectitle>
<line>The other part of our experiment is about the selection of the fusion protein. We chose MS2 and PP7, two widely used RNA binding proteins as the adapter. In our in vivo confirmatory, we respectively fused them with the N-terminal of EGFP(1-158AAs) and the C-terminal of EGFP(159-238AAs). Fluorescent proteins have proven to be excellent reporters and biochemical sensors with a wide range of applications. In a split form, they are not fluorescent, but their fluorescence can be restored by supplementary protein–protein interactions that reassemble the split polypeptides. A fluorogenic chromophore can self-catalytically form within an isolated N-terminal fragment of the EGFP. The restoration of the split protein fluorescence can be driven by protein complementary interactions. The ability of the EGFP system to respond quickly to protein interaction can be useful for detecting the kinetics of many other types of pairwise interactions in living cells. We use western blot to detect the expression of two fusion proteins.</line>
<photo>{photo4}</photo>
<note>Figure 4. Schematic diagram of the principle of split EGFP </note>
<note>(A)Left: the circRNA do not exist in the system; (B)Right: The circRNA exists and the fluorescent can be seen.</note>
<subtitle>2 Extracellular experiments in prokaryotic cell cytoplasm (E. coli lysate)</subtitle>
<sectitle>2.1 CircRNA</sectitle>
<line>Expressing and purifying artificial circRNAs in prokaryotes remains a challenge. The fact that circRNAs are merely found in eukaryotes hints the possibility that prokaryotic cells are lack of RNA cyclizing strategies. As a result, we will still conduct the circularization in vitro. The cyclized RNA will be added directly to the sonication lysate of prokaryotes(E. coli), which can simulate the situation in prokaryotic cells and provide theoretical basis for the construction of cyclized RNA in prokaryotic cells in the future.</line>
<line>In fact, construction circRNAs in E. coli has already been achieved. José-Antonio Daròs has successfully constructed intron-assited (Figure 5), self-circularization vector and thus providing the platform for constructing artificial circRNA in prokaryotes (https://doi.org/10.1080/15476286.2021.1872962)</line>
<photo>{photo5}</photo>
<note>Figure 5. Using ELVd to design circular double strand RNA</note>
<line>Considering that longer circRNA molecule correspond with lower cyclizing efficiency, we shortened the circRNA to 69 bp. Only 10 bp of the internal sequence and necessary stemloops were retained. We also conducted secondary structure prediction to avoid unexpected secondary structure (Figure 6).</line>
<photo>{photo6}</photo>
<note>Figure 6: Secondary structure of the shortened circRNA: the stem loops of MS2 and PP7 are shown </note>
<sectitle>2.2 Selection of RNA binding protein (RBP)</sectitle>
<line>We selected the commonly used RBPs, mostly from E. coli or phage coat proteins. The number of amino acids are under 130 so that these small molecules will not interfere with the functional group of the enzymes fused with them. In addition, characteristics of their aptamers were well studied. For instance, the dissociation constant (Kd) of PP7 wild-type is only 1nM. (Table1)</line>
<note>Table 1 The dissociation constants of the designed PP7 operator variants for PP7 coat protein</note>
<photo>{photo7}</photo>
<line>In addition to MS2 and PP7, we have also ordered and cloned Qβ, λN, SLBP (from HEK293) to pET28a vectors with the help of gene synthesis companies, which provides an abundant toolbox for aptamer-RBP combinations on circRNA scaffolds. The selection of aptamer-RBP combinations with different affinities and molecular sizes may meet multiple experimental requirements. We will purify these RBPs and test their affinity (dissociation constants)  with aptamers in order to standardize the RBP elements.</line>
<sectitle>2.3 Fusion protein</sectitle>
<line>After completing the validation of the in vitro experiment, we wish to apply the RNA scaffold into practical application. CenA is an endo-glucanase that breaks down water-soluble cellulose into reduced oligo disaccharides. And BglA is a 6-phospho-beta-glucosidase, which can further turn the oligomeric disaccharide into glucose. That is, CenA and BglA can catalyze the conversion of cellulose to glucose through a two-step sequential enzymatic reaction (Figure 7). We also used western blot to detect the expression of both proteins. Then we cleaved the cells by ultrasound and obtain the lysate . Pre-constructed circRNA was added to the obtained lysate as the experiment group, while the other without circRNA was control group. The changes in glucose concentration were detected by spectrophotometer as a way to verify whether the cyclic RNA elements could serve to improve the reaction efficiency.</line>
<photo>{photo8}</photo>
<note>Figure 7. Two-step sequential enzymatic reaction catalyzed by CenA and BglA</note>
<line>The circRNA scaffold can shorten the distance between two adjacent enzymes, improving the efficiency of this consecutive reactions. In our experiments, the circRNA scaffolds bring CenA and BglA closer so that the oligosaccharide (product of CenA) quickly spread into the active center of BglA and was subsequently converted into glucose. Compared with the natural condition, the presence of circRNA scaffolds change the way how these enzymes are organized (Figure8), thus speeding up the efficiency of multi-step continuous enzymatic reactions.</line>
<photo>{photo9}</photo>
<note>Figure 8. CircRNA shorten the distance between two enzymes</note>
<line>CenA and BglA were respectively fused with MS2 and PP7 in E. coli BL21a. We also used western blot to detect the expression of both proteins. Then we cleaved the cells by ultrasound and obtain the lysate . Pre-constructed circRNA was added to the obtained lysate as the experiment group, while the other without circRNA was control group. The changes in glucose concentration were detected by spectrophotometer as a way to verify whether the cyclic RNA elements could serve to improve the reaction efficiency.</line>
<line>The circRNA ciRS-7 with at least 70 binding sites for miR-7 acts as molecular sponges. Inspired by this, we wish to design multiple protein-binding stemloops on our circRNA as a way to achieve higher binding efficiency (Figure 9). Limited by the efficiency of RNA in vitro circularization, we are unable to achieve that. We hope to provide such ingenious designs for future iGEMers. If such an idea really becomes reality someday in the future, it will create more possibilities for synthetic biology.</line>
<photo>{photo10}</photo>
<note>Figure 9. Multiple RBP binding sites on a single circRNA molecule</note>
To learn more, you can go to the <link>design=>/project/design</link> page.`,
    engineering_build: `
    <title>Build</title>
<subtitle>1 Plasmid construction</subtitle >
<line>We planned to build the system in separate parts for individual testing, and eventually assemble them together into the cells. We ordered vectors (pET28a, pcDNA3.1), DNA sequences and primers from the company.</line>
<sectitle>1.1 Construction of 5 RBPs</sectitle>
<line>We first want to clone 5 kinds of RBPs into expression vector: pET28a，then purify each RBP to characterize their function parameters, for example, dissociation constant(KD), to quantitively describe their affinity to their specific aptamer. Gene circuits are listed below:</line>
<photo>{photo11}</photo>
<note>Figure 10 .Gene circuits to express 5 RBPs</note>
<line>We use Beyotime’s Seamless Cloning Kit(D7010S) to construct plasmids containing above five gene circuits. DNA sequences of RBPs were ordered from Tsingke Biotechnology, and primers are listed below:</line>
<note>Table 2 Primers used for RBPs’ Homologous recombination</note>
<photo>{photo12}</photo>
<line>After the linearization of plasmid pET28a(BamHI and HindⅢ), these amplified fragments can be ligased into the linearized vector, through Beyotime’s Seamless Cloning Kit(D7010S).</line>
<photo>{photo13}</photo>
<note>Figure 11 PCR amplification of λN,PP7, SLBP, MS2(from left to right). DNA marker is DL1000.</note>
<photo>{photo14}</photo>
<note>Figure 12 PCR amplification of SLBP and Qβ（from left to right）.DNA marker is DL1000</note>
<photo>{photo15}</photo>
<note>Figure 13 transformation and selection of PP7,λN,SLBP and Qβ.</note>
<photo>{photo16}</photo>
<note>Figure 14 transformation and selection of MS2.</note>
<photo>{photo17}</photo>
<note>Figure 15 colony PCR of SLBP,MS2,PP7,Qβ and λN(from left to right, exclude the first lane)</note>
<line>Then we choose positive result from colony PCR to sequencing and extract destinate plasmid for use.</line>
<sectitle>1.2 Construction of EGFP fragment-RBP chemeric gene for split EGFP experiment.</sectitle>
<line>Like the method used for 5 RBPs’ clone, this time we cloned two inserts into the linearized vector(pcDNA3.1) at the same time. The EGFP split into 1-158aa fragment(EGFP-N) and 159-238 fragment(EGFP-C), as described by Ariel B. Lindner[1],then fused to MS2 and PP7, respectively, through a flexible linker, whose length is 7aa.</line>
<photo>{photo18}</photo>
<note>Figure 16 Gene circuits to perform split EGFP</note>
<photo>{photo19}</photo>
<note>Figure 17 transformation of two pcDNA3.1 recombinant plasmids</note>
<photo>{photo20}</photo>
<note>Figure 18 colony PCR indicates the successful construction of two plasmids to be used for split EGFP</note>
<line>The positive of Colony PCR indicating successful construction of fusion protein vector.</line>
<sectitle>1.3 Construction of cellulase-RBP expression vector</sectitle>
<line>We have Tsingke Biotechnology to help us synthesis cenA-MS2 and bglA-PP7 expression plasmid(pET28a). Linkers are chosen to be flexible, and the length of linkers are chosen to be 15aa and 20aa, respectively. The sequence of linkers are:
(GGGGS)3 and (GGGGS)4, respectively.</line>
<line> We also ordered a codon optimized vision of cenA, called cenA_optimized. We hope this codon optimized vision could increase the amout of cellulase expressed in E.coli. For distinguish between cenA and cenA_optimized, we need to construct plasmids that contain only cenA and cenA_optimized, respectively. Due to time limitation and the COVID-19, we have not successfully achieved that. Expression of cellulase-RBP will be listed in test page.</line>
<subtitle>2 Circular RNA scaffold construction</subtitle>
<line>In the case of split-EGFP, when circRNA and fusion protein expression vector were introduced into eukaryotic cell HEK293 at the same time, their luminescence intensity was observed under fluorescence microscope. The positive control was the cells with complete EGFP, and the negative control was the cells without circRNA scaffold. To test our system quantitatively, we perform FCM (flow cytometry) to confirm that our design works.</line>
<line>Then, the cellulose system was transferred into BL21(E. coli), and the cell membrane was cleaved by ultrasound to form an in vitro environment. The measurement is the amount of glucose produced per unit time, which can be easily measured by spectrophotometry. We will test how many folds of reaction rate could be achieved after adding our circRNA scaffold.</line>
<line>We have found two research paper, which successfully construct covalently closed RNA molecular in mammalian cells[2] and E.coli[3], respectively. These breakthrough will extremely outstretch the application of our circRNA scaffold. However, we decided to obtain our circRNA through an in vitro method, following Oliver Rossbach’s paper[4].</line>
<sectitle>2.1 In vitro transcription</sectitle>
<line>We used Thermo Scientific TranscriptAid T7 High Yield Transcription Kit(K0411) and followed its instruction.</line>
<line>First, we have Tsingke Biotechnology synthesized the DNA template which will be used for in vitro transcription. The primers are below:</line>
<line>F:5’-TAATACGACTCACTATAGGGG-3’</line>
<line>R:5’-CAGGTCCGTTGGTTCGTT-3’</line>
<line>After PCR amplification, we subsequently perform in vitro transcription as follows:</line>
<note>Table 3 in vitro transcription reaction</note>
<photo>{photo21}</photo>
<note>37℃ for 6h</note>
<line>The reason of adding GMP into reaction tube is that we suppose T7 polymerase can use GMP as the initial nucleotide of transcripts.</line>
<photo>{photo22}</photo>
<note>Figure 19 First time of transcription. Bands smear and indicate there are RNase contamination.</note>
<photo>{photo23}</photo>
<note>Figure 20 successful in vitro transcription</note>
<sectitle>2.2 Cyclization</sectitle>
<line>Next, we use T4 RNA Ligase I to cyclize transcript above. The kit we use is the NEB’s T4 RNA Ligase 1 (ssRNA Ligase)(M0204S). Protocol lists below:</line>
<note>Table 4 cyclization reaction</note>
<photo>{photo24}</photo>
<note>25℃ for 2h</note>
<photo>{photo25}</photo>
<note>Figure 21 Fist time of cyclization product. The left lane is liner product and the right lane is cyclization product. First time failed because the product’s migrating rate is the same as liner product.</note>
<photo>{photo26}</photo>
<note>Figure 22 RNase R experience. From left to right is liner RNA without RNase R, liner RNA with RNase R, cyclization product without RNase R, cyclization product with RNase R. This confirmed that our first cyclization failed.</note>
<line>We suppose the transcripts are most 5’ triphosphate RNA, so the T4 RNA Ligase I cannot work. Based on this, we ordered 5’ monophosphate modified RNA oligo from Tsingke Biotechnology. This time, we successfully constructed circRNA.</line>
<photo>{photo27}</photo>
<note>Figure 23  successful cyclization. Left lane is liner product and right lane is circRNA. circRNA migrates slower than liner RNA.</note>`,
    engineering_test: `
    <title>Test</title>
<subtitle>1 CircRNA</subtitle>
<line>We performed RNase R experiment to test its stability compared to liner RNA. We found that after long-enough time treated by RNase R, circular RNA partially degraded. This probably because this circRNA is sensitive to RNase R, according to the instruction of RNase R. Anyway, we will use our cyclization product to do the downstream experiment.</line>
<photo>{photo28}</photo>
<note>Figure 24 RNase R experiment. From left to right is liner RNA without RNase R, liner RNA with RNase R, cyclization product without RNase R, cyclization product with RNase R.</note>
<subtitle>2 Expression of EGFP fragment-RBP fusion proteins in HEK293</subtitle>
<line>We separately transfect the plasmid which contain EGFP-N-MS2 and EGFP-C-PP7, respectively, into HEK293, to test whether our split EGFP fragment have expressed or not, to prevent the interference of false negative result. Western blot shows that our destinate fusion protein have both expressed in HEK293.</line>
<photo>{photo29}</photo>
<note>Figure 25 Western blot of split EGFP fragment. Left lane is EGFP-N-MS2 and right lane is EGFP-C-PP7.</note>
<subtitle>3 Split EGFP</subtitle>
<line>We have four groups of cells to perform a FCM(flow cytometry). They are: negative control(no plasmid or RNA transfection); positive control(transfected with plasmid that express EGFP); co-transfection with two split EGFP plasmids; co-transfection with two split EGFP plasmids and circRNA scaffold. Result shows that the brightness of group4 is between group1 and group2, which conforms to our design. Brightness of group3 is as low as group1, indicating that no false positive effect are interfering our result. All in all, this split EGFP proves that our<link>circRNA scaffold do work.=>/proof/project</link></line>
<photo>{photo30}</photo>
<note>Figure 26 positive control</note>
<photo>{photo31}</photo>
<note>Figure 27 negative control</note>
<photo>{photo32}</photo>
<note>Figure 28 co-transfection with circRNA scaffold</note>
<photo>{photo33}</photo>
<note>Figure 29 co-transfection without circRNA scaffold</note>
<subtitle>4 Expression of cellulase-RBP fusion proteins</subtitle>
<line>We transformed the plasmids which contain cellulase-RBP into BL21(DE3) competent cells and obtained lysate which contain corresponding cellulase by ultrasound. We also performed WB to make sure that our fusion proteins expressed. However, due to time limitation, we only got cenA_optimized-MS2 fusion protein, and do not do further characterization of their activity.</line>
<subtitle>5 Characterization of cellulase-RBP fusion proteins</subtitle>
<line>Due to time limitation, we failed to complete this. However, we will perfect this part to fulfil our project.</line>
<subtitle>6.Two-step cellulose degradation with circRNA </subtitle>
<line>Due to time limitation, we failed to complete this. However, we will perfect this part to fulfil our project.</line>
    `,
    engineering_other: `
    <title>Learn</title>
<line>Through the quantitive result, we learn that we have successfully construct our circRNA scaffold and it works. However, the stability of our circRNA is not that robust. We need to make it more resistant against exo-RNase. Also, although split EGFP experiment shows that we successfully colocalize two proteins on our scaffold, the brightness is weak. We should consider to change the length of spacer between two adjacent aptamers and the flexibility or length of linkers between RBP and proteins. In our future design of cellulose degradation experiment, we will optimize our fusion protein and circRNA scaffold based on these two aspects.</line>
<title>Re-design</title>
<line>This time, for cellulose degradation experiment, we first choose different scaffolds, which contain 5nt, 10nt, 15nt, 20nt length of spacer, to find out the best spacer length. Then, <link>we have SYSU-Software to help us choose linkers between RBP and cellulase.=>/hp/partnership</link> We finally choose two linkers, which are completely flexible and 15aa and 20aa length for cenA_optimized-MS2 and bglA-PP7, respectively.</line>
<subtitle>References</subtitle>
<ref>[1]Camille J. Delebecque,Ariel B. Lindner,Pamela A. Silver,Faisal A. Aldaye. Organization of Intracellular Reactions with Rationally Designed RNA Assemblies[J]. Science,2011,333(6041):</ref>
<ref>[2]Jacob L. Litke,Samie R. Jaffrey. Highly efficient expression of circular RNA aptamers in cells using autocatalytic transcripts[J]. Nature Biotechnology: The Science and Business of Biotechnology,2019,37(6):</ref>
<ref>[3]Ortolá Beltrán,Cordero Teresa,Hu Xu,Daròs JoséAntonio. Intron-assisted, viroid-based production of insecticidal circular double-stranded RNA in Escherichia coli.[J]. RNA biology,2021:</ref>
<ref>[4]Janina Breuer,Oliver Rossbach,Emanuela Jacchetti. Production and Purification of Artificial Circular RNA Sponges for Application in Molecular Biology and Medicine[J]. Methods and Protocols,2020,3(2):</ref>
    `,

    hp_overview: `
<first>In order to make our work responsible and good for the world, we conducted human practice to communication with other people, asking their advice, collaborating with them and geting feedback to improve our project.</first>
<line>Below, we will outline what we have done, which is summarized as follows. For details, you can visit the corresponding page provided:</line>
<subtitle>Interga Human Practices</subtitle>
<line>How our human practices impact on our design including idea, circRNA structure, detection and so on. <more>interga</more></line>
<subtitle>Collaborations</subtitle>
<line>What we have done with other teams such as SCU-CHINA, ZJTU-CHINA and so on. <more>collaborations</more></line>
<subtitle>Partnership</subtitle>
<line>How we make a long-term cooperation with SYSU-Software. <more>partnership</more></line>
<subtitle>Implementation</subtitle>
<line>How we would implement our project in the public, company, Medical field, and in the project of other teams. <more>implementation</more></line>
<subtitle>Communication</subtitle>
<line>How we conducted science communication with company and other teams through ccic and five schools exchange meeting. <more>communication</more></line>
<subtitle>Education</subtitle>
<line>How can we promote synthetic biology to high schools and the general public. <more>education</more></line>
    `,

    hp_interga: `
<first>Human practice is the study of how your work affects the world, and how the world affects your work. Through human practice work we can answer the question of our project's impact on society, whether it will actually make the world a better place,comply with ethical principles and be safe to implement.Our human practice work always respects public attitudes, stakeholder values and expert advice, and this dialogue exists throughout the development of the project. In Integrated Human Practices, you can see our efforts to integrated feedback from our Human Practices and incorporate that into our project.</first>
<subtitle>Impact on design</subtitle>
<sectitle>Background</sectitle>
<line>iGEM is not only about genetic engineering but rather about what we can do for the world with synthetic biology.What our team concerned is global environmental problems. Exhaust gas from cars, ships and planes is the main source of air pollution.The findings show that bio-based petrochemicals account for 33% of the total petrochemical production in a stringent carbon dioxide mitigation scenario, in 2050[1]. At present, more than 60 countries and regions in the world promote the use of ethanol gasoline for vehicles, the annual consumption of ethanol gasoline is about 600 million tons, accounting for about 60% of the total global gasoline consumption[2].However, fuel ethanol, a clean fuel, costs more than 4000 yuan per ton. How to reduce its production cost is the key to its extensive usage.</line>
<sectitle>Idea——from phase separation to circRNA</sectitle>
<line>The production of ethanol is inseparable from enzymatic reaction, and we hope to achieve our goal by increasing the rate of enzymatic reaction.There are many factors affecting the rate of enzymatic reaction: substrate concentration, enzyme concentration and so on. Because our goal is to reduce the cost of fuel ethanol production, we chose to start with enzyme concentration.After brainstorming, we wanted to use phase separation to aggregate the enzyme so as to increase the enzyme concentration at a certain site. In order to better understand phase separation and whether this scheme is feasible, we talked to biochemists and discussed how to use synthetic biology as a solution.</line>
<line>Professor Cui Jun is the head of the Department of Biochemistry, School of Life Sciences, Sun Yat-sen University, and Wan Gang is a professor of biochemistry and molecular biology in the School of Life Sciences, Sun Yat-sen University. His research includes the function and regulation of phase transition.Professor Wan pointed out that "The local concentration can be increased by using phase transition to construct membrane-free organelles" ,and reminded us whether the idea is novel or not.Professor Cui mentioned that "Phase transition is formed through differences in polarity. It has been found that many molecules such as RNA or even DNA can induce it, but phase separation is a very complex system and the degree of phase separation needs to be controlled."</line>
<photo>{photo1}</photo>
<note>Figure.1 Visit a professor specialized in biochemistry</note>
<photo>{photo2}</photo>
<note>Figure.2 Visit a professor specialized in phase transition function and regulation</note>
<line>In the conversation with professors, we realized that phase separation can achieve a local increase in protein concentration, but it is also uncontrollable. As a team of undergraduates, we seek a solution that can not only achieve the goal of increasing the concentration, but also under our control.After consulting a large number of literatures, we hope to use circRNA as a molecular scaffold, which is not only a controllable scheme, but also can achieve our goal. We talked to Professor Zhang Rui, who is a professor specialized in RNA epigenetics and bioinformatics in the School of Life Sciences of Sun Yat-sen University. He endorsed our idea and pointed out that "circRNA can interact with specific proteins and can use polypeptide chains as linker to realize the aggregation of different proteins."</line>
<photo>{photo3}</photo>
<note>Figure.3 Visit a professor specialized in RNA epigenetics and bioinformatics</note>
<line> This inspires us to think that this system is not only suitable for increasing enzyme concentration in ethanol production,It can also be applied to other enzymatic reactions, thus our CRAFT (CircRNA Assembly FacTory) was born.</line>
<sectitle>In vitro or in vivo</sectitle>
<line>When we design the experiment, the first thing we need to consider is whether we conduct the experiment in vitro or in vivo.Considering the uncontrollability of the in vivo environment, we just chose the cell-free system, but the purification effect of proteins obtained by the in vitro experiment is poor.When we were almost at a dead end, we interviewed Master Zhang.</line>
<line>Our conversation with Master Zhang was very enlightening, and he gave us a deeper understanding of the relative merits of these two methods. We need to express fusion proteins, and the in vitro experiments need to purify the proteins. This step is inefficient, and the fluorescence concentration may not be detected when extracellular split EGFP is used to verify, but we are worried about the difficulty of cyclizing RNA in cells. Master Zhang  provided us with a method of intracellular cyclization, so we chose to conduct both the in vitro and in vivo experiments, focusing on HEK293 cells as chassis cell.</line>
<photo>{photo4}</photo>
<note>Figure.4 visit Master Zhang </note>
<sectitle>CircRNA structure</sectitle>
<line>When we choose to use CircRNA as a molecular scaffold, we intuitively regard CircRNA as a rigid ring structure.However, in the follow-up conversation with Professor Cui Jun, he suggested that CircRNA actually has a complex tertiary structure, which will affect the binding of RNA-binding proteins to it. And it may have a great impact on our experiment.After the conversation, we realized that this is an important issue that we need to consider. After consulting literatures and discussing, we decided to use a variety of RNA three-dimensional structure prediction software to predict the CircRNA structure we constructed and to determine whether its site can correctly bind to RNA-binding proteins. See <link>Model=>/model</link>for details.</line>
<sectitle>Detection——split EGFP and cellulase</sectitle>
<line>With regard to the successful testing of the whole system, the first thing comes to our mind is to use fluorescent protein split EGFP to detect. We got very important feedback in the interview with Dr.Mark, an important developer of Vland.During the interview, Dr. Mark pointed out that the fusion protein may be misfolded or degraded rapidly after it is expressed in cells.It may lead to false negative results.He suggested that two enzymes that degrade cellulose can be used.Through the detection of product glucose concentration to detect whether the system is built successfully.This may be easier to detect results than split EGFP.</line>
<photo>{photo5}</photo>
<note>Figure.5 Meet with an important developer of Vland</note>
<sectitle>Others</sectitle>
<line>We also had frequent exchanges with other iGEM teams throughout the process. We have gathered with other team members to talk about the progress and shortcomings of the project,the largest of which is CCiC (Conference of China iGEMer Community), a national summit sponsored by Chinese iGEM teams. Our project was improved step by step in the communication with them.You can find more information in the <link>Communication=>/hp/communication</link>.</line>
<subtitle>Ethics</subtitle>
<line>When our circRNA scaffold works perfectly, it may not be accepted by the public because of ethical problems. We therefore raised ethical issues with ourselves and the stakeholders we have come into contact with throughout human practice. As young scientists, we must first be responsible for society, and we should strictly deal with the existing safety ethics problems. In the questionnaire, we also see the public's concern about the ethical issues of destroying nature and creating life.</line>
<line>In the interview with Dr.Mark, he said, "If it is used in food production, we should first pay attention to the removal of endotoxin and ensure safety. In addition, we should abide by local laws and regulations on ethical issues. It is true that some people can accept genetic engineering and some people cannot accept it, but in fact, it does not affect the economic benefits of enterprises. ".In the interview with Professor Zhang Genshui, he mentioned the term "inference of guilt", which means that when the security of a new technology cannot be fully proved, we first think it is bad. </line>
<line>We realize that ethical concerns are justified, and what we need to do is not to dispel them, but to give them a more comprehensive understanding of synthetic biology so that they can both see the benefits and risks of synthetic biology and make their own decisions.See <link>Education=>/hp/education</link> for details.</line>
<subtitle>References:</subtitle>
<ref>[1].de Oliveira, C.C.N., et al., The role of biomaterials for the energy transition from the lens of a national integrated assessment model. Climatic Change, 2021. 167(3-4).</ref>
<ref>[2]https://mp.weixin.qq.com/s/X6ag3TgiB8NhF8B4jXT0iQ</ref>
    `,

    hp_collaborations: `
    <first>In order to better improve our project and promote synthetic biology, we have carried out many short-term or long-term cooperation with many other teams such as scu-china, SCUT China and SYSU software this year.</first>
    
<title>With SCU-CHINA</title>
<line >In order to promote synthetic biology and let the general public know more specific and in-depth contents of synthetic biology and even biological research. At the invitation of Sichuan University, we jointly launched a special course project on synthetic biology. A series of synthetic biology online courses were recorded with several iGEM competition teams in China who have accumulated experience in specific topics. Realize the expansion of synthetic biology to other biological fields and other disciplines. Increase the influence of iGEM community and play a positive role in attracting and cultivating more talents in the field of synthetic biology.</line >

<line>Because our team took RNA scaffold as the theme this year, we participated in this popular science project with the theme of circular RNA factory and industrial production of ethanol, and recorded popular science videos on industrial production as part of the plan, increasing the coverage of the project. </line>
<photo>{photo1}</photo>
<note>Figure 1 Video of special course on synthetic biology recorded by our team</note>

<title>With ZJTU-CHINA</title>
<line>This summer vacation, we held a virtual meeting, inviting ZJTU-CHINA to have an oline meetup. Thanks to this collaboration, ZJTU-CHINA helped us a lot on the design of circRNA scaffold. Meanwhile, we established a protocol about RNA-related experiment.</line>
<line>ZJUT-China are developing a cell-free RNA biosensor to detect various RNA molecules in urine or blood , which have proven to serve as biomarkers for the diagnosis and prognosis of various diseases.</line>
<photo>{photo2}</photo>
<note>Figure 2 Hold an online communication meeting and conduct online communication with zjtu-china</note>

<line>Through communication, we found the common ground of our projects with ZJTU-CHINA, that is, we both need to design and construct a short stranded RNA to complete the subsequent experimental verification, so we conducted an in-depth discussion on RNA design. At first, because our experiment progressed rapidly and the length of RNA transcribed in vitro met the requirements of ZJTU-CHINA, we planned to send the transcripts to ZJTU-CHINA to help them complete the experimental verification; However, the members of ZJTU-CHINA generated secondary sequences from our RNA primary sequences through nupack. The results showed that the stem ring structure formed by our aptamer did not meet their requirements.</line>
<line>In addition, through modeling, they used StructureEdito and RNAfold to analyze the secondary structure of our circular RNA and found that our scaffold may have an unexpected fourth neck ring structure, which may affect the function of other aptamers. What bothers us is that this is different from the results we obtained using RNA designer.</line>
<photo>{photo3}</photo>
<note>Figure 3 Prediction of circRNA1 secondary structure using StructureEdito </note>
<photo>{photo4}</photo>
<note>Figure 4 Prediction of circRNA1 secondary structure using RNAfold </note>

<line>For the sake of insurance, we deleted unnecessary sequences, leaving only aptamer and 10nt spacer. After ZJTU-CHINA tested with StructureEdito and RNAfold, the following results were obtained:</line>
<photo>{photo5}</photo>
<note>Figure 5 Prediction of circRNA1 secondary structure using StructureEdito </note>
<photo>{photo6}</photo>
<note>Figure 6 Prediction of circRNA1 secondary structure using RNAfold </note>

<line>In subsequent experiments, we used the improved circular RNA. Thank zjtu-china for its help in our circrna design.</line>
<line>At the same time, they received our direction on RNA-related experiment. After in-vitro transcription and agarose electrophoresis, an obviously degradation was detected. So we gave them some advice on how to avoid RNase contamination during RNA-related experiment. By following our instruction, they finally obtained purer transcript.</line>
<photo>{photo7}</photo>
<note>Figure 7 Instruction on RNA-related experiment</note>

<line>Moreover, they needed to perform an annealing reaction to form an RNA-protein hybrid, but were lack of protocol. Due to our experience on RNA annealing before ligation, we gave them an reference protocol:</line>
<line>Add 10× annealing buffer to a final concentration of 1× to purified transcripts and allow the annealing of the double-stranded stem-loop regions (or splint oligonucleotide) by incubating the samples for 2 min at 95 ◦C and decreasing the temperature by 1 ◦C/10 s to 25 ◦C within a thermocycler.</line>
<line>10× circRNA annealing buffer (100 mM Tris pH7.5, 500 mM NaCl)</line>
<line>To learn more, you can also go to the page of ZJTU-CHINA:<href>https://2021.igem.org/Team:ZJUT-China/Collaborations</href></line>
<title>With SYSU-Software</title>
<line>This year, we have carried out long-term cooperation with SYSU-software, which runs through the whole year of our project. Since the establishment of the team, we have cooperated and actively discussed in many aspects such as project progress, project design and experimental planning.</line>
<line>Through many discussions and exchanges, on the one hand, we urge each other to check the progress of the project, on the other hand, while SYSU-software provides us with software support such as structural prediction, we also assist them in carrying out laboratory experiments.
In the process of cooperation, we adjust our own projects by absorbing the ideas of each other and learning from the problems encountered by them and the accumulated experience, constantly optimize and improve our projects, and achieve complementary results.</line>
<line>To learn more about our cooperation with SYSU-software, please visit the<link>Partnership=>/hp/partnership</link>page.</line>
    `,

    hp_partnership: `
    <first>This year, we have carried out long-term cooperation with SYSU-software, which runs through the whole year of our project. Since the establishment of the team, we have cooperated and actively discussed in many aspects such as project progress, project design and experimental planning. And in this process, we can constantly improve our own projects.</first>
<title>Exchange progress</title>
<line>At the initial stage of team formation, the leaders of our two teams established a common communication group. In the group, we will irregularly exchange questions encountered in the process of project progress, and adjust our plan by understanding the progress of the other team.</line>
<photo>{photo1}</photo>
<note>Figure 1 two team leaders</note>
<photo>{photo2}</photo>
<photo>{photo3}</photo>
<note>Figure 2,3 two teams communicate with each other on various issues</note>
<title>Opening ceremony</title>
<line>On the day of the opening ceremony, we rented a conference room for members of the two teams to watch the opening ceremony and held a simple tea party offline. It provides a face-to-face communication opportunity for the players of the two teams.</line>
<line>At this tea party, we had an in-depth understanding of the project situation of the other team and determined that they would provide us with necessary software support</line>
<photo>{photo4}</photo>
<note>Figure 4 the tea party and watched the opening ceremony together</note>
<title>Experiment</title>
<line>Because the experiment of the software team was carried out later than us, when they started the experiment, we had carried out the experiment for several months and accumulated more experience. Therefore, in order to improve efficiency, we assisted the software team in the design and preparation of some early experiments, guided them in some simple experimental operations, and helped them quickly get familiar with the process and steps of the experiment.</line>
<line>In this process, our two teams have further deepened their understanding of their respective topics</line>
<photo>{photo5}</photo>
<note>Figure 5 the atlas we used to guide SYSU-software</note>
<title>Project Exchange</title>
<line>In terms of specific projects, since the projects of our two teams have many similar parts, we sometimes adjust or optimize our own projects according to the data, materials and suggestions provided by each other.</line>
<line>For example, in the linker selection of fusion protein, we planned to select randomly at first. However, because the software team's project involves linker design, we know more about it. After listening to them introduce the choice of linker in detail, we know that linker is divided into flexible and rigid. We should also take this into account when selecting linker.</line>
<line>In addition, in the spatial structure prediction of our model, the prediction of protein structure is completed by SYSU-Software.</line>
{pdb}
<line>In April, together with SYSU-software, we attended the five school exchange meeting hosted by SCUT-china. At the meeting, we learned about the overall design of each other's project. Inspired by our team's project, SYSU-software decided to study the light controlled protein aggregation in the project to realize the light control of multi-step reaction speed.</line>
<photo>{photo6}</photo>
<note>Figure 6 exchange meeting of five universities</note>
<title>Human Practice</title>
<line>During the summer vacation, our team went to the biological company for an interview (visit Communication page for details). In this process, we have gained a lot of useful suggestions. After learning about our interview process, SYSU-Software also hopes to contact the company, so we provide them with contact channels to help them conduct interviews.</line>
<photo>{photo7}</photo>
<note>Figure 7 SYSU-CHINA's interview with Qingdao blue biological company</note>
<photo>{photo8}</photo>
<note>Figure 8 SYSU software interviewed Qingdao blue biological company</note>

<title>School Promotion</title>
<line>In order to promote synthetic biology and our project among freshmen, we also co organized a lecture for freshmen with the SYSU-Software. For details of the lecture, you can go to <link>education=>/hp/education</link> to learn more.</line>

<line>For more details about our partnership, you can also go to the relevant pages of SYSU-Software: <href>https://2021.igem.org/Team:SYSU-Software/Partnership</href></line>
    `,

    hp_implementation: `
   <title>Implementation</title>
<subtitle>The public</subtitle>
<first>We are concerned about the production of clean fuel ethanol, but we are not limited to doing it in the laboratory.As young scientists, it is crucial to get out of the ivory tower and get in touch with the masses.We want to have better contact with the public. Due to the influence of the epidemic, we can only contact the public through the Internet. In order to better design the questionnaire, we interviewed Professor Li Tianming,who specialized in socio-ecological at the School of Life Sciences, Sun Yat-sen University.He told us that the application should focus on user experience.Attention should be paid to the consumption of cellulose and precious grain in the production of industrial alcohol.And if it is applied to food,food safety and people's acceptance of GM food should be emphasized.When we design a questionnaire,ensuring the privacy of the participating public is important.</first>
<photo>{photo1}</photo>
<note>Figure 1.Visit a professor specialized in socio-ecological</note>
 <line>So we started with the problem of environmental pollution and discussed with people how to reduce pollution and save energy in daily life, to understand the public's acceptance of ethanol fuel produced using synthetic biology. This is different from GM food, and it will be a little more acceptable.In addition, we only collected two basic information about age occupation and promised to keep the results of the questionnaire confidential to ensure public privacy.The results show people believe that immediate action is needed for the spread of clean energy, which also makes our project more hopeful. You can find analysis of questionnaire results in the<download>Questionnaire results=>https://2021.igem.org/wiki/images/3/32/T--SYSU-CHINA--surveyResult.pdf</download>.</line>
<photo>{photo2}</photo>
<note>Figure 2.We promised the confidentiality of the results in the questionnaire note</note>
<subtitle>Company</subtitle>
<line>Vland is a leading biological company, focusing on the development, production and sales of enzyme reagents, animal health products and so on.Dr.Mark is an important developer of Vland who specialize in protein engineering, metabolic engineering, enzyme preparation.</line>
<line>On August 23rd, we were fortunate to visit the production workshop and R & D center of Vland. We also interviewed Dr.Mark, which was a very important inspiration for our project.We understood that fermentation products need to go through very complex steps from design to commercialization.It means that not only ethanol, but also the increased efficiency of any other fermentation product is the key to reducing costs, which is of great significance to the company.The company uses the decomposition of straw cellulose to get glucose and converted it  into alcohol, which makes us very surprised. Because our CircRNA scaffold is expected to be used to help them improve the efficiency of alcohol production. You can find more information in the<link>Communication=>/hp/communication</link>.</line>
<photo>{photo3}</photo>
<photo>{photo4}</photo>
<note>Figure 3，4. Visit the production workshop and R & D center of Vland</note>
<subtitle>Medical field</subtitle>
<line>We realized that CircRNA scaffold can be applied not only to the production of fuel ethanol, but also to any multi-enzyme reaction. In addition to environmental pollution, we follow the people-oriented values and consider whether CircRNA scaffold can be applied to the field of medicine.Professor Zhang Genshui is a professor of pharmacology at Guangzhou Medical University. We interviewed him on September 23, 2021, hoping to expand the application of the project in the field of medicine. Professor Zhang believes that CircRNA scaffold may not be used in targeted drug therapy, because more upstream and downstream reactions need to be considered, and there is still a long way to go.But it can be used in drug production to speed up the efficiency of some drug production and reduce the cost of drugs.</line>
<photo>{photo5}</photo>
<note>Figure 5.Visit a professor specialized in pharmacology </note>
<subtitle>The project of other teams.</subtitle>
<line>We have established a long-term cooperation with the SYSU-Software team. In their project, it involves the design of linker, and the choice of linker is a key part of our project. Proper linker design can establish a strong connection between RBP and enzymes and fully alleviate the adverse interaction between different enzymes due to steric hindrance. We asked the software team about the details of using the algorithm to design linker and discussed it. At the same time, we helped them verify the function and physical and chemical properties of the designed linker. In addition, we also discussed the issues related to the modeling of RNA-protein interaction and strive to improve the projects of both sides.See<link>Collaborations=>/hp/collaborations</link>for details.</line>
<subtitle>Our idea of implementation of circRNA factory</subtitle>
<line>Through our human practices which are listed above, including visiting professors and biotechnology company, we confirmed our original idea that our circRNA factory can be applied to those biotechnology companies which are employing microbes as microfactories to produce valuable chemicals. Our product may accelerate their production efficient, thus creating more economic benefits. </line>

    `,

    hp_communication: `
    <title>Enterprise visit</title>
<first>A mature program needs to be refined in ways such as the feasibility, safety, realistic significance and so on. Therefore, advice from potential stakeholders is of great importance for us  to ensure that our project could meet real-world demands. Also, we need to learn more about the industrial environment. For the reasons above, we visited a enterprise.</first>
<line>Vland is a leading biological company, focusing on the development, production and sales of enzyme reagents, animal health products and so on. We were fortunate to have access to the company to learn. We not only visited the production workshop and the reasearch and development center, but also got a valuable opportunity to interview Dr. Mark, an important researcher of Vland. The communication with him brought very significant inspiration to our project.</line>
<line>From our meeting with Dr. Mark, we learned:</line>
<line>Factors limiting yield in today's production;</line>
<line>Ways to improve productivity;</line>
<line>Advantages and viability of using circRNA;</line>
<line>Moreover, he offered us several suggestions:</line>
<line>Cellulolytic enzymes could be used to verify the result, which would make the project even more relevant.</line>
<line>Endotoxin which is harmful to the human body need to be removed.</line>
<line>To ensure safety, relevant laws and regulations need to be followed.</line>
<line>Through science popularization, the public could understand the production principle and safety of the product.</line>
<photo>{photo1}</photo>
<note>Figure 1 visit Vland</note>
<title>CCiC</title>
<line>Initiated by iGEM students in China, CCIC is currently the largest regional iGEMer exchange activity in the world. It offers iGEMers in the Chinese competition area a platform to learn from each other. In the past few sessions, SYSU-CHINA has gained a lot of experience and cooperation opportunities from CCIC. This year our team also benefited a lot from CCIC meetings.</line>
<line>As the result of the need for epidemic prevention and control, on August 28, 2021, we participated in the online meeting of CCiC, during which we shared our ideas with other iGEMers and got their approval. After learning about other teams' projects, we also realized that our project needed further improvement and refinement.</line>
<photo>{photo2}</photo>
<note>Figure 2 CCIC project performance</note>
<title>Five schools meeting</title>
<line>On April 4, 2021, we, as well as SYSU-Software, SZU-China, SCAU-China, SUSTech-China were invited to a meeting held by SCUT-CHINA. During the meeting, each team shared their thoughts and answered the questions from other teams. Thanks to the meeting, We not only benefited a lot from the suggestions from other teams, but also made more friends that shared the same interest in synthetic biology.</line>
<photo>{photo3}</photo>
<note>Figure the meeting</note>
<line>Other teams have asked us the following questions:</line>
<line>CircRNA may be degraged or inhibited in vibo experiments. How could the problem be solved?</line>
<line>How to get the sequence of RBS?</line>
<line>Would the RNA break with so many proteins bounded to it?</line>
<line>How would this project benefit human society?</line>
<line>Moreover, They offered us several suggestions:</line>
<line>Requirements for part need to be noted.</line>
<line>We could communicate with the professors from South China University of Technology who are specialized in the linkage of nucleic acids to proteins.</line>
<line>Molecular dynamics methods could be used in the design of the model.</line>
<line>Thanks to their questions and advice, we have enhanced the feasibility of our project in terms of experimental design, human practice and so on.</line>
<line>Our team also carried out educational and popular science activities for high school students, freshmen and the public this year. For details of this part, you can go to the<link>education=>/hp/education</link>page</line>
    `,

    hp_education: `
    <title>Social media</title>
<subtitle>1.Science Video</subtitle>
<first>As the latest research hotspot in RNA in recent years, circRNA is still a relatively unknown molecule to most of our peers. In the process of designing our project, igemers from SYSU-CHINA considered circRNA as a very promising molecule for research and application. Therefore, we hope that more people will have a better understanding of circRNA and the molecular scaffold we have built up based on circRNA. We made a science video about molecular scaffolds and uploaded it to bilibili, which got considerable views and positive feedback from people. We believe that more and more people will be interested in circRNA and join this field after watching the video.</first>
<photo>{photo1}</photo>
<note>Figure 1 Our account on bilibili</note>
<subtitle>2.WECHAT public account tweet</subtitle>
<line>At present, the public account is a popular media for disseminating information. Our peers get information in public tweets everyday. Therefore, we realized that the public account is a suitable platform for us to introduce our project to other people and hence we register for a public account. By using the account to post tweets, we not only introduced our ideas about the project to our peers, but also shared our latest progress to igemers of other teams which were interested in our project. </line>
<photo>{photo2}</photo>
<note>Figure 2 WeChat official account and some of the past releases.</note>
<title>High School Education</title>
<line>Bacteria are an important model organism and an essential experimental material in synthetic biology. Therefore, we think it is very necessary for high school students who are interested in synthetic biology to master some experimental methods related to bacteria. We visited Longcheng Senior High School in Shenzhen and taught the students how to inoculate bacteria, cauterize and sterilize them, and achieve asepsis. We believe that this experience will not only teach them practical experimental skills, but also stimulate their interest in biology.</line>
<photo>{photo3}</photo>
<note>Figure 3 Guide high school students to carry out aseptic operation</note>
<line>Biosafety is an issue of great importance to IGEM, and is a potential risk that raises concerns in the development of synthetic biology. Therefore, understanding the importance of biosafety in synthetic biology and how to achieve it will not only raise students' awareness of biosafety, but also reduce their concerns about the potential risks of synthetic biology. Therefore, we offered a lecture on biosafety at Longcheng Senior High School. We hope that this lecture will lay the foundation for their future study of biology.</line>
<photo>{photo4}</photo>
<note>Figure 4 Give lectures on microbiology in high school</note>
<line>In addition, during the summer vacation, at a science summer camp held by the school for high school students, we also had the honor to popularize the existence of synthetic biology among high school students who have always participated in the summer camp. Everyone also showed great interest in this.</line>
<photo>{photo5}</photo>
<note>Figure 5 Summer science summer camp for high school students</note>
<title>School Promotion</title>
<line>Because September and October are our first school seasons, during which many freshmen enter our school. In order to let freshmen get access to some information about synthetic biology and iGEM, we set up a platform in the school together with SYSU software to promote synthetic biology and team projects for freshmen.</line>
<photo>{photo6}</photo>
<note>Figure 6 Talk about our project with the freshmen</note> 
<line>We designed and printed posters to introduce our team's project, and successfully attracted many interested students to communicate with us, and they showed their intention to join us in the competition in the future.</line>
<photo>{photo7}</photo>
<note>Figure 7 Our poster</note>
<line>At the same time, there are some students who are very interested in the daily work of our team. We also led them to visit our laboratory and introduced our usual experimental contents and arrangements.</line>
<photo>{photo8}</photo>
<note>Figure 8 Show the freshmen around our laboratory</note>

<title>Resource delivery</title>
    <line>Synthetic biology is a subject rising from abroad, and most of the relevant frontier literatures and materials are in English. During educating when conducting Human Practice, we found that most of our participants are middle school students who may not have professional understanding and not proficiency in English to learn synthetic biology. Therefore, in order to better promote and educate this group of people, we release materials and teaching videos in Chinese version or with Chinese subtitles. What's more, we sorted these materials into a package, packed and sent to them. We hoped that students can have a deeper understanding of synthetic biology through these organized materials.</line>
<subtitle>Package composition:</subtitle>
<line>1.Brochure: The two brochures presented in PDF are our tweets on official account. <italic>Know About iGEM</italic> introduced iGEM, known as International Genetically Engineered Machine Competition. In this tweet, we also briefly described the concept of "synthetic biology". <italic>2021 SYSU-CHINA Project Introduction: CRAFT</italic> gave a detailed introduction of SYSU's projects this year and possible applications of our product. There are headlines and explanation in English presenting on yellow clips in the brochure.</line>
<line>2.Lecture 1: Basis of molecular scaffoldings (included a video and PPT slides). Based on the fact that our project this year is about circRNA scaffolds, we made an educational video to explain and popularize the concept of "molecular scaffold", and hope that students will have a better understanding of our project through.</line>
<line>3.Lecture 2: Circle RNA Factory and Industrial Manufacture of Ethanol (included a video and PPT slides) This lecture is also based on our project. This video clarify why are we using  circRNA scaffold for ethanol production.</line>
<line>Feedback questionnaire: After you read and watched these materials, how do you feel about it? Please fill in the feedback form and let us know, thanks for your support!</line>
<line>If you want to get our package, you can click here: <download>SYSU-CHINA education package=>https://2021.igem.org/wiki/images/8/8a/T--SYSU-CHINA--eduPack.zip</download></line>
    `,

    members: `
<first>SYSU-CHINA (Sun Yat-Sen University iGEM Experimental Team) was founded by the School of Life Sciences, Sun Yat-Sen University. Thanks to the support of the college and the talents of the students, SYSU-CHINA has worked hard and achieved a lot since its first competition in 2009. The team of SYSU-CHINA in 2021 is made up of students from school of Life Sciences, School of Communication and Design and school of medicine. Let’s see who the members are.(The list is in no particular order).</first>
    `,

    attributions: `
    <title>Attribution:</title>
  <first>We feel privileged to be blessed with the opportunity to complete most of our panned job regardless of the timely interfere of the outbreak. The team was able to unit to continue the process of idea production, both wet and dry lab, human practice work and designing of wiki, videos, etc. The work done is approved by the team, and the credit goes to all team members for their collaboration. The details are given below. Names are sequenced according to the alphabet.</first>
<subtitle>Brainstorms:</subtitle>
  <line>Staring point: Nov. 2020: Bingnan Zhao, Jingyuan Bian, Sijun Li, Sisi Ying, Qing Dong, Wanling Chen, Xuming Zeng, Yating Yu, Zhiqin Chen</line>
  <line>PI: Rui Zhang, professor of School of Lifesciences</line>
  <line>Instructors: Rui Zhang, Xu Jing, professor of School of Lifesciences, etc.</line>
  <line>Student leaders: Bingnan Zhao, Sijun Li, Yating Yu</line>
  <line>Advisors: Jiaxue Chen</line>
<subtitle>Project:</subtitle>
<sectitle>1. Wet lab</sectitle>
<line>The major credit goes to: Bingnan Zhao, Jingyuan Bian, Xuming Zeng</line>
<line>All team members participated in wet lab work.</line>
<line>We received support from prof. Zhang and prof. Xu, plus several seniors, Tao Xu, Jiawen Yang, Weixing Zhang, Yicong Xu, Wenbing Yang, Hui Luo, Fujia Han, Ying Qiu, Yachao Zuo, who provided safety or technique training, kindly provide experimental materials, and supervision during the whole process.</line>
<sectitle>2. Dry lab</sectitle>
<line>The major credit goes to: Jialing Zou, Yating Yu, Zhiwei Wang, Bingnan Zhao, who covered most of the model establishment process.</line>
<sectitle>3. Human practice</sectitle>
<line>Qing Dong was responsible for the early stage of Human practice.</line>
<line>The communication between different universities and teams are mostly done by Bingnan Zhao, Xuming Zeng, Yating Yu.</line>
<line>Yining Huang did some HP work in her school, and collected HP information which is listed on our wiki.</line>
<sectitle>4. Art design</sectitle>
<line>The major credit of wiki design goes to Sijun Li, Sisi Ying, Yating Yu, Zhiqing Chen, Zhiwei Wang. And our advisor: Jingjing Liang</line>
<line>The major credit of promotion video goes to Wanling Chen, Zhiqing Chen.</line>
<line>During the production of promotion video, we gained robust support from Jiaxue Chen, one of the advisor of the team.</line>
<line>Jiajun Ling dubbed the promotion video.</line>
<line>The major credit of presentation video goes to Jingyuan Bian, Wanling Chen, Yating Yu, Zhiqing Chen.</line>
<line>Jiajun Ling, Jiaxue Chen designed the team logo and the project logo.</line>
<subtitle>Team:</subtitle>
<sectitle>1. Collaboration and partnership: </sectitle>
<line>Team leaders plus the rest of the team.</line>
<line>We have collaboration with ZJTU-CHINA, SCUT-CHINA, SYSU-Software, and our partnership through the year is SYSU-Software.</line>
<sectitle>2. Safety:</sectitle>
<line>Bingnan Zhao, Jingyuan Bian, Xuming Zeng, after supervised trial by instructor: Hui Luo, and PI: Rui Zhang. All of the student members attend editing the safety form.</line>
<subtitle>Parts:</subtitle>
<sectitle>1. Contribution: </sectitle>
<line>Bingnan Zhao, Jingyuan Bian, Xuming Zeng</line>
<line>Guided by instructor: Hui Luo</line>
<line>Our registry number range from BBa_K3960001 to BBa_K3960017</line>
<sectitle>2. Engineering Success and improvement of a previous project: </sectitle>
<line>Bingnan Zhao, Jingyuan Bian</line>
<line>Guided by instructor: Hui Luo</line>
<subtitle>Team training:</subtitle>
  <line>SYSU-CHINAs characterize themselves in the ever lasting legacy between the senior and the next generation of team leaders. A strong synthetic biology background is gained both from the textbook and field practice. The journey ignites by the three team leaders.</line>
 <line> We also gain support from seniors included the instructor: Hui Luo</line>
  <line>Supportive PI: prof. Zhang</line>
<subtitle>Acknowledgement:</subtitle>
 <line> Special thanks to prof. Xu, who provided us with the major platform for wet lab labor to continue, and our PI, prof. Zhang, with a number of teachers who provided the components in the early stages of brainstorming which finally made the idea come into being. We would also send our sincere regards to our advisors, among whom Jiaxue Chen, Jingjing Liang provided the much need arty support, and the timely help of the seniors in both the two professors'lab, including: Tao Xu, Jiawen Yang, Weixing Zhang, Yicong Xu, Wenbing Yang, Hui Luo, Fujia Han, Ying Qiu, Yachao Zuo, We also thank to those who gave us influential suggestions, including Jianzhong Liu, a PI in our school; Juesen Zhang, an overgraduate in Rui Zhang's lab, who prevent us from wasting to much time on protein extract.</line>
  <line>Moreover, we want to thank some people who offered their kindly help to us out of our school. Yiqing Hao offered kindly help to us to show us around the Vland Biotech, bringing us closer to real factory; Genshui Zhang, a professor from Guangzhou university of Chinese Medicine, who patiently accepted our interview and gave us many useful instructions. We sent out our survey link to collect information about people's ideas on biofuels. And we really thank to those who had spent their precious time taking part in our survey. Our primers were ordered from RuiBiotech and our DNA sequences were ordered from Tsingke Biotechnology, and the sequencing service was also provided by RuiBiotech.</line>
  <line>At the end of the journey, may all the participants take a much needed nap. Saturn is finally at scene! May the legacy lies awake in hibernation.</line>
    `
}
