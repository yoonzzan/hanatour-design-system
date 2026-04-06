#!/bin/bash

# ========================================================
# Hanatour Design System - Universal AI Skill Setup Script
# ========================================================

# 1. 색상 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${PURPLE}========================================================${NC}"
echo -e "${PURPLE}   하나투어 디자인 시스템 AI 스킬 설치 서비스 🚀   ${NC}"
echo -e "${PURPLE}========================================================${NC}"

# 2. 설치 후보 경로 리스트 (홈 디렉토리 기준)
CANDIDATES=(
    "$HOME/.gemini/antigravity/skills"
    "$HOME/.agent/skills"
    "$HOME/.cursor/skills"
)

SOURCE_PATH="./ai-skill/hanatour-design-system"
INSTALLED_COUNT=0

# 3. ai-skill 소스 경로 확인
if [ ! -d "$SOURCE_PATH" ]; then
    echo -e "${RED}❌ 에러: ai-skill 폴더를 찾을 수 없습니다. 저장소 내에서 실행해 보세요.${NC}"
    exit 1
fi

# 4. 각 경로 탐색 및 설치
echo -e "${CYAN}🔍 에이전트 환경을 탐색하는 중...${NC}"
for TARGET_BASE in "${CANDIDATES[@]}"; do
    # 쉘 확장 대응 (eval 사용)
    REAL_TARGET_BASE=$(eval echo "$TARGET_BASE")
    TARGET_PATH="$REAL_TARGET_BASE/hanatour-design-system"

    if [ -d "$REAL_TARGET_BASE" ]; then
        echo -e "${BLUE}[감지됨]${NC} $REAL_TARGET_BASE 경로에 설치를 시작합니다..."
        
        # 기존 폴더가 있으면 교체
        rm -rf "$TARGET_PATH"
        cp -R "$SOURCE_PATH" "$REAL_TARGET_BASE/"
        chmod -R 755 "$TARGET_PATH"
        
        echo -e "      ${GREEN}✔ 설치 완료!${NC}"
        ((INSTALLED_COUNT++))
    fi
done

# 5. 만약 하나도 감지되지 않았을 경우 (대화형 모드)
if [ $INSTALLED_COUNT -eq 0 ]; then
    echo -e "${YELLOW}⚠️  알려진 에이전트 경로가 감지되지 않았습니다.${NC}"
    echo -e "기본 경로($HOME/.gemini/antigravity/skills)를 생성하시겠습니까? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        DEFAULT_BASE="$HOME/.gemini/antigravity/skills"
        DEFAULT_PATH="$DEFAULT_BASE/hanatour-design-system"
        
        echo -e "${BLUE}[생성]${NC} 경로 생성 및 설치 중... ($DEFAULT_BASE)"
        mkdir -p "$DEFAULT_BASE"
        cp -R "$SOURCE_PATH" "$DEFAULT_BASE/"
        chmod -R 755 "$DEFAULT_PATH"
        
        echo -e "      ${GREEN}✔ 성공적으로 설치되었습니다!${NC}"
        ((INSTALLED_COUNT++))
    else
        echo -e "${RED}❌ 설치가 취소되었습니다. 수동으로 경로를 지정해 주세요.${NC}"
        exit 1
    fi
fi

# 6. 마무리 안내
echo -e ""
echo -e "${GREEN}🎉 총 ${INSTALLED_COUNT}개의 경로에 스킬이 배포되었습니다!${NC}"
echo -e "이제 에디터의 AI 에이전트에서 바로 명령해 보세요:"
echo -e "${NC}👉 ${NC}\033[1;36m\"하나투어 가이드라인 스킬 써줘\"${NC}"
echo -e ""
echo -e "${PURPLE}========================================================${NC}"
