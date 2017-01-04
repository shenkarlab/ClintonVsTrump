import mediacloud, datetime, json
mc = mediacloud.api.MediaCloud('48d9fd877527e6c8c5ff25553c124b1634b8b2926310e2d259d6518221e2a5f2')


values1 = {None: None}

def getNumArticle(str):

    res = mc.sentenceCount(str, solr_filter=[mc.publish_date_query( datetime.date( 2016, 10, 1), datetime.date( 2017, 01, 01) ),'tags_id_media:1'], split=True, split_start_date='2016-10-01', split_end_date='2017-01-01', split_daily=True)

#print res['split']

    for key in res['split']:
        if (type (res['split'][key]) == int):
           #print "key: %s , value: %s" % (key, res['split'][key])
           date, space, time = key.partition('T')
           values1[date] = res['split'][key]       
           #print "key: %s , value: %s" % (date, res['split'][key])

    total = {}

    for key in sorted(values1.iterkeys()):
        total[(key)] = values1[key]
        #print "%s: %s" % (key, values1[key])
    return total

totalNum = getNumArticle('hillary AND clinton AND bernie AND sanders')
x = json.dumps(totalNum,sort_keys=True)
print x
#print sorted(x, key=itemgetter('date'))
