#!/bin/python3
import requests


def get_all_data_from_api():
    url = 'https://jsonmock.hackerrank.com/api/articles'
    params = {'page': 1}
    articles_raw = requests.get(url, params=params).json()

    total_pages = articles_raw['total_pages']
    current_page = articles_raw['page']
    data = articles_raw['data']

    while current_page <= total_pages:
        current_page = current_page + 1
        params = {'page': current_page}
        response = requests.get(url, params=params).json()
        data += response['data']

    return data


def sanitize_num_comments(data):
    for index, el in enumerate(data):
        if not el['title'] and not el['story_title']:
            data.pop(index)
            continue

        if el['title'] is None and el['story_title'] is not None:
            data[index]['title'] = el['story_title']

        if el['num_comments'] is None:
            data[index]['num_comments'] = 0

    return data


def select_top_articles_by_limit(articles_list, size):
    articles = []
    i = 0
    while i < size - 1 and i < len(articles_list):
        if articles_list[i]['title'] is not None:
            articles += [articles_list[i]['title']]
        elif articles_list[i]['story_title'] is not None:
            articles += [articles_list[i]['story_title']]
        i += 1

    return articles


def reorder_if_num_comments_are_equal(articles, sorted_list):
    i = 0
    while i < limit and i < len(articles) - 1:
        if sorted_list[i]['num_comments'] == sorted_list[i + 1]['num_comments']:
            if sorted_list[i]['title'] > sorted_list[i + 1]['title']:
                articles[i] = sorted_list[i + 1]['title']
                articles[i + 1] = sorted_list[i]['title']
        i += 1

    return articles


def top_articles(size):
    data = get_all_data_from_api()
    data = sanitize_num_comments(data)
    sorted_list = sorted(data, key=lambda x: x['num_comments'], reverse=True)
    articles = select_top_articles_by_limit(sorted_list, size)
    articles = reorder_if_num_comments_are_equal(articles, sorted_list)

    return articles


if __name__ == '__main__':
    fptr = open('/Users/brunousml/projects/hackerHankTests/output/file.txt', 'w')
    limit = 2
    print(f'Limit was set to {limit}')

    result = top_articles(limit)
    print(result)
    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
