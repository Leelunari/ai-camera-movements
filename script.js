const movementsData = [
    { en: "Slow Dolly In", ko: "슬로우 돌리 인", prompt: "Slow dolly in, camera moves slowly forward toward the subject.", desc: "카메라가 피사체를 향해 천천히 물리적으로 다가갑니다.", category: "dolly" },
    { en: "Slow Dolly Out", ko: "슬로우 돌리 아웃", prompt: "Slow dolly out, camera moves slowly backwards away from the subject.", desc: "카메라가 피사체로부터 천천히 물리적으로 멀어집니다.", category: "dolly" },
    { en: "Fast Dolly In", ko: "패스트 돌리 인", prompt: "Fast dolly in, camera moves rapidly forward toward the subject, urgent motion.", desc: "긴박하게 피사체를 향해 빠르게 돌진하는 연출입니다.", category: "dolly" },
    { en: "Vertigo Effect (Zolly)", ko: "버티고 효과 (졸리/돌리 줌)", prompt: "Vertigo effect, dolly zoom, camera moves backward while zooming in, background expands.", desc: "배경이 왜곡되며 심리적인 불안정함을 주는 효과입니다.", category: "zoom" },
    { en: "Extreme Macro Zoom", ko: "익스트림 매크로 줌", prompt: "Extreme macro zoom, zoom transition from subject to micro details of surface.", desc: "피사체에서 미세한 디테일로 파고드는 초근접 줌입니다.", category: "zoom" },
    { en: "Cosmic Hyper Zoom", ko: "코스믹 하이퍼 줌", prompt: "Cosmic hyper zoom, fast zoom transition from extreme wide view down to macro level.", desc: "우주 수준의 광활한 뷰에서 특정 지점으로 순식간에 빨려 들어갑니다.", category: "zoom" },
    { en: "Over the Shoulder (OTS) Shot", ko: "오버 더 숄더 샷", prompt: "Over the shoulder shot, camera mounted behind subject A framing subject B.", desc: "한 인물의 어깨 너머로 대상을 바라보는 대화 구도입니다.", category: "zoom" },
    { en: "Fisheye or Peephole Lens", ko: "어안 렌즈 / 핍홀", prompt: "Fisheye lens, extreme wide-angle distortion, circular frame.", desc: "둥글게 왜곡된 광각 렌즈로 독특한 시야를 연출합니다.", category: "zoom" },
    { en: "Reveal from Behind", ko: "비하인드 리빌", prompt: "Wipe movement, camera slides laterally from behind foreground object to reveal the scene.", desc: "물체 뒤에서 카메라가 옆으로 나오며 장면을 노출합니다.", category: "pan" },
    { en: "Through Shot", ko: "스루 샷 (통과)", prompt: "Fly through, camera moves through an opening into the scene.", desc: "창문이나 좁은 틈 사이를 뚫고 지나가는 카메라 무브먼트입니다.", category: "pan" },
    { en: "Reveal from Blur", ko: "블러 리빌", prompt: "Rack focus, start completely out of focus, slowly pull focus until sharp.", desc: "흐린 상태에서 서서히 초점을 맞춰 대상을 드러냅니다.", category: "zoom" },
    { en: "Rack Focus", ko: "랙 포커스", prompt: "Rack focus, focus shifts from the foreground object to the background subject.", desc: "앞에 있는 물체에서 뒤에 있는 대상으로 초점을 이동시킵니다.", category: "zoom" },
    { en: "Tilt Up", ko: "틸트 업", prompt: "Tilt up, camera pans vertically up from bottom to top.", desc: "카메라를 위로 올려다보며 웅장함을 강조합니다.", category: "pan" },
    { en: "Tilt Down", ko: "틸트 다운", prompt: "Tilt down, camera pans vertically down from top to bottom.", desc: "위에서 아래로 내려다보며 상황을 설명합니다.", category: "pan" },
    { en: "Camera Truck Left", ko: "카메라 트럭 왼쪽", prompt: "Truck left, camera moves sideways on a track to the left.", desc: "카메라 전체가 왼쪽으로 평행 이동합니다.", category: "dolly" },
    { en: "Lateral Truck Right", ko: "래터럴 트럭 오른쪽", prompt: "Truck right, camera moves sideways on a track to the right.", desc: "카메라 전체가 오른쪽으로 평행 이동합니다.", category: "dolly" },
    { en: "Orbit 180", ko: "오비릿 180", prompt: "Orbit 180, camera moves in a half-circle around the subject.", desc: "피사체 주위를 반바퀴 돌며 입체감을 부여합니다.", category: "dolly" },
    { en: "Fast 360 Orbit (The Spin)", ko: "패스트 360 오비릿", prompt: "Fast 360 orbit, camera spins rapidly 360 degrees around the subject.", desc: "피사체 주위를 아주 빠르게 한 바퀴 회전합니다.", category: "dolly" },
    { en: "Slow Cinematic Arc", ko: "슬로우 시네마틱 아크", prompt: "Slow cinematic arc, camera moves in a wide curve to reveal side profile.", desc: "완만한 곡선을 그리며 피사체의 측면을 드러냅니다.", category: "dolly" },
    { en: "Pedestal Down", ko: "페데스탈 다운", prompt: "Pedestal down, camera lowers vertically straight down.", desc: "카메라 높이를 수직으로 낮춥니다.", category: "pan" },
    { en: "Pedestal Up", ko: "페데스탈 업", prompt: "Pedestal up, camera rises vertically straight up from waist to eye level.", desc: "카메라 높이를 수직으로 높입니다.", category: "pan" },
    { en: "Crane Up (High Angle Reveal)", ko: "크레인 업", prompt: "Crane up, camera lifts high into the air.", desc: "카메라가 높이 솟구치며 주변 전경을 노출합니다.", category: "drone" },
    { en: "Crane Down (Landing)", ko: "크레인 다운", prompt: "Crane down, camera descends slowly to the subject.", desc: "높은 곳에서 피사체 방향으로 서서히 내려앉습니다.", category: "drone" },
    { en: "Smooth Optical Zoom In", ko: "스무스 광학 줌 인", prompt: "Smooth optical zoom in, lens magnifies subject, camera stays stationary.", desc: "카메라는 고정된 채 렌즈만으로 대상을 확대합니다.", category: "zoom" },
    { en: "Smooth Optical Zoom Out", ko: "스무스 광학 줌 아웃", prompt: "Smooth optical zoom out, lens widens, background becomes blurry.", desc: "카메라는 고정된 채 렌즈만으로 시야를 넓힙니다.", category: "zoom" },
    { en: "Snap Zoom (Crash Zoom)", ko: "스냅 줌 / 크래시 줌", prompt: "Snap zoom, crash zoom, rapid zoom directly into the eyes.", desc: "갑작스럽고 빠르게 특정 부위로 줌을 당겨 강조합니다.", category: "zoom" },
    { en: "Drone Fly Over", ko: "드론 플라이 오버", prompt: "Drone fly over, high altitude flight moving forward over the landscape.", desc: "공중에서 풍경 위를 직선으로 비행하며 촬영합니다.", category: "drone" },
    { en: "Epic Drone Reveal", ko: "에픽 드론 리빌", prompt: "Epic drone reveal, rising and tilting down to reveal the scene.", desc: "상승하며 아래로 틸트해 광활한 장면을 보여줍니다.", category: "drone" },
    { en: "Large Scale Drone Orbit", ko: "대규모 드론 오비릿", prompt: "Large scale drone orbit, massive sweeping circle around the landscape.", desc: "드론이 넓은 반경으로 원을 그리며 풍경을 담습니다.", category: "drone" },
    { en: "Top Down (God's Eye View)", ko: "탑 다운 (수직 뷰)", prompt: "Top down shot, camera pointing straight down, slow twist.", desc: "수직 위에서 아래를 내려다보며 촬영합니다.", category: "drone" },
    { en: "FPV Drone Aggressive (Drone Dive)", ko: "FPV 드론 다이브", prompt: "FPV drone dive, aggressive diving motion down a vertical structure.", desc: "드론이 수직 구조물을 따라 빠르게 하강합니다.", category: "drone" },
    { en: "Handheld Documentary Style", ko: "핸드헬드 다큐멘터리", prompt: "Handheld camera, shaky motion, natural movement, documentary style.", desc: "직접 들고 찍는 듯한 생동감 있는 흔들림을 줍니다.", category: "pan" },
    { en: "Whip Pan", ko: "휩 팬", prompt: "Whip pan, camera whips violently to the side with extreme directional motion blur.", desc: "옆으로 매우 빠르게 휘둘러 블러 효과를 주는 기법입니다.", category: "pan" },
    { en: "Dutch Angle (Roll)", ko: "더치 앵글 (롤)", prompt: "Dutch angle, camera roll, tilted sideways on Z-axis.", desc: "화면을 비스듬히 기울여 긴장감을 연출합니다.", category: "pan" },
    { en: "Leading Shot (Backward Tracking)", ko: "리딩 샷", prompt: "Leading shot, camera moves backward matching the subject's speed.", desc: "피사체의 앞에서 뒷걸음질 치며 이동을 이끕니다.", category: "dolly" },
    { en: "Following Shot (Forward Tracking)", ko: "팔로잉 샷", prompt: "Following shot, camera follows behind the subject matching speed.", desc: "피사체의 뒤를 따라가며 움직임을 촬영합니다.", category: "dolly" },
    { en: "Side Tracking (Parallel)", ko: "사이드 트래킹", prompt: "Side tracking, camera trucks alongside the subject.", desc: "피사체와 나란히 옆에서 이동하며 촬영합니다.", category: "dolly" },
    { en: "POV Walk (First Person Walk)", ko: "POV 워크", prompt: "POV walk, first person camera moving forward with bobbing motion.", desc: "실제 걷는 것처럼 위아래로 흔들리는 1인칭 시점입니다.", category: "dolly" },
    { en: "Hyperlapse (Moving Time-Lapse)", ko: "하이퍼랩스", prompt: "Hyperlapse, camera moves forward rapidly, time accelerated, fast motion, light trails.", desc: "시간과 공간의 이동을 빠르게 압축하여 보여줍니다.", category: "dolly" },
    { en: "Barrel Roll (Vortex Inception Shot)", ko: "배럴 롤 (보텍스)", prompt: "Barrel roll, camera spins 360 degrees clockwise while moving forward, disorienting.", desc: "비행기처럼 회전하며 앞으로 나아가는 역동적인 샷입니다.", category: "pan" },
    { en: "Bullet Time (Frozen Moment)", ko: "불렛 타임", prompt: "Bullet time, frozen moment, ultra slow motion, camera orbit right.", desc: "시간이 멈춘 듯한 극한의 슬로우 모션 효과입니다.", category: "dolly" },
    { en: "Worm's Eye Tracking (Ground Level)", ko: "웜즈 아이 트래킹", prompt: "Worm's eye view, low angle tracking, camera moves along the ground looking up.", desc: "지면 밀착 각도에서 위를 올려다보며 이동합니다.", category: "dolly" }
];

const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search-input');
const resetBtn = document.getElementById('reset-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';

function renderCards(data) {
    gallery.innerHTML = '';
    if (data.length === 0) {
        gallery.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 100px 0; color: #888;">검색 결과가 없습니다.</div>';
        return;
    }
    data.forEach((item) => {
        const originalNum = movementsData.indexOf(item) + 1;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="media-container">
                <img src="gifs/example${originalNum}.gif" loading="lazy" onerror="this.src='https://via.placeholder.com/400x225?text=example${originalNum}.gif+Waiting'">
            </div>
            <div class="card-content">
                <h3 class="title">${originalNum}. ${item.en} <br><span class="ko-title">(${item.ko})</span></h3>
                <p class="description">${item.desc}</p>
                <div class="prompt-text">${item.prompt}</div>
                <button class="copy-btn" onclick="copyPrompt(this)">Prompt Copy</button>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function updateGallery() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = movementsData.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.en.toLowerCase().includes(searchTerm) || 
                              item.ko.toLowerCase().includes(searchTerm) || 
                              item.desc.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    renderCards(filteredData);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        updateGallery();
    });
});

searchInput.addEventListener('input', updateGallery);
resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    updateGallery();
    searchInput.focus();
});

function copyPrompt(button) {
    const text = button.previousElementSibling.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = "Copied!";
        button.style.backgroundColor = "#28a745";
        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = "#000";
        }, 1200);
    });
}

// 초기 로딩
renderCards(movementsData);