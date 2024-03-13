document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById("wrap");

    // 문의 메일 제목
    wrap.innerHTML += `
        <div style="width:100%; background-color: #FFF; padding: 28px; box-sizing:border-box; margin:0 auto; margin-bottom: 12px;">
            <div style="width: 100%; max-width: 480px; margin: 0 auto;">
                <div style="font-size: 12px; font-weight: 400; color: #666; text-decoration: underline; text-underline-offset: 4px; margin-bottom: 8px;">"파티원 구함" &lt;partywonguham@gmail.com></div>
                <div style="font-size: 20px; font-weight: 700; color: #333;">[파티원 구함] 접수된 문의 내용</div>
            </div>
        </div>
    `;

    // 문의 메일 내용
    wrap.innerHTML += `
        <div style="width:100%;">
            <div style="width: 100%; margin: 0 auto; padding: 40px 28px; box-sizing: border-box; background-color: #FFF; font-size: 16px; font-weight: 400; line-height: 1.75; color: #333; font-family: 'Roboto', 'Noto Sans KR', '맑은고딕', Malgun Gothic, '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;">
                <div style="width: 100%; max-width: 480px; margin: 0 auto; font-size: 20px; font-weight: 700; text-decoration: underline; text-underline-offset: 4px;">피드백 및 문의</div>
                <table style="width: 100%; max-width: 480px; margin: 0 auto; margin-top: 28px; font-size: 14px; border-top: 1px solid #333; border-collapse: collapse;">
                    <tbody>
                        <tr style="border-bottom: 1px solid #CCC;">
                            <td style="width: 100px; padding: 20px 0; padding-left: 16px; font-weight: 700;">이메일 주소</td>
                            <td style="word-break: break-all; padding: 20px 16px;">${"taedonn@taedonn.com"}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #CCC;">
                            <td style="width: 100px; padding: 20px 0; padding-left: 16px; font-weight: 700;">문의 분류</td>
                            <td style="word-break: break-all; padding: 20px 16px;">${"일반 문의"}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #CCC;">
                            <td style="width: 100px; padding: 20px 0; padding-left: 16px; font-weight: 700;">문의 제목</td>
                            <td style="word-break: break-all; padding: 20px 16px;">${"안녕하세요, 테스트 입니다."}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #333;">
                            <td style="width: 100px; vertical-align: top; padding: 20px 0; padding-left: 16px; font-weight: 700;">문의 내용</td>
                            <td style="word-break: break-all; padding: 20px 16px;">${`대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 모든 국민은 통신의 비밀을 침해받지 아니한다. 감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 대법원장은 국회의 동의를 얻어 대통령이 임명한다. 모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.`}</td>
                        </tr>
                    <tbody>
                </table>
                <div style="width: 100%; max-width: 480px; margin: 0 auto; margin-top: 40px; font-size: 14px; color: #666;">
                    <div>파티원 구함, © 2023 - ${new Date().getFullYear()}</div>
                </div>
            </div>
        </div>
    `;
});