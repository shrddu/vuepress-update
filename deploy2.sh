cd docs/.vuepress/dist
# ����Ƿ������Զ�������
# echo 'www.yourwebsite.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# �������Ҫ���� https://USERNAME.github.io
git push -f https://github.com/shrddu/shrddu.github.io.git master
# ��������� https://USERNAME.github.io/<REPO>  REPO=github�ϵ���Ŀ
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages
cd -